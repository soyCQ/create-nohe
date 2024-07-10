#!/usr/bin/env node
import fs from 'fs';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';
import { info } from './chat/index.js';
import { execa } from 'execa';
import gitignore from './gitignore.js';
var root;
var data = {};
const Init = async () => {
    let args = process.argv.slice(2);
    if (!args[0]) {
        info(`[ {{cyan}}NOHE{{end}} ] Write a name "npm init nohejs Name"`);
        return;
    }
    root = process.cwd() + '/' + args[0];
    var dir = await createDirectory(root);
    if (!dir) {
        info(`[ {{cyan}}NOHE{{end}} ] There is already a directory with that name`);
        return;
    }
    data = {
        name: args[0]
    };
    const paths = fileURLToPath(import.meta.url);
    const a = path.dirname(paths);
    const ruta = path.join(a, '.');
    await Folder(ruta + '/template', root);
    var render = ejs.render(gitignore, {});
    fs.writeFile(root + '/.gitignore', render, err => {
        if (err)
            throw err;
    });
    try {
        await execa({ shell: true, stdio: 'inherit' }) `cd ${args[0]} && npm install nohejs nohecli`;
        info(`[ {{cyan}}info{{end}} ] Completed Installation`);
        info(`[ {{cyan}}info{{end}} ] cd ${args[0]} and npm run dev`);
    }
    catch (error) {
        info(`[ {{red}}ERROR{{end}} ] npm install: ${error}`);
    }
};
const Folder = (dir, output) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, { withFileTypes: true }, async (err, files) => {
            if (err)
                reject();
            else {
                files.forEach(async (file) => {
                    if (file.isDirectory()) {
                        await createDirectory(output + '/' + file.name);
                        await Folder(dir + '/' + file.name, output + '/' + file.name);
                    }
                    if (file.isFile()) {
                        fs.readFile(dir + '/' + file.name, (_err, _data) => {
                            var render;
                            if (file.name !== "index.html") {
                                render = ejs.render(_data.toString(), data);
                            }
                            else {
                                render = _data.toString();
                            }
                            fs.writeFile(output + '/' + file.name, render, err => {
                                if (err)
                                    throw err;
                            });
                        });
                    }
                });
                resolve();
            }
        });
    });
};
const createDirectory = (dir) => {
    return new Promise((resolve) => {
        fs.mkdir(dir, function (err) {
            if (err) {
                resolve(false);
            }
            resolve(true);
        });
    });
};
Init();
