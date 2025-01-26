#!/usr/bin/env node
import inquirer from 'inquirer';

const Init = async () => {
    let args = process.argv.slice(2);
    console.clear()

    console.log(" ⚡ Welcome To NoheJS !")
    console.log()
    const name = await inquirer.prompt([
        {
            type: 'input',
            name: 'n',
            message: 'Project name',
            default: 'nohe-project'
        }
    ])

    const framework = await Framework()
    console.clear()
    console.log("🚀 Creating project...")
    console.log()
    console.log("📦 Project name: ", name.n)
    console.log("🛠️ Framework: ", framework.f)
    console.log()
    console.log("📦 Creating project...")

    await CreateProject(name, framework)
    console.clear()
    console.log()
    console.log("🚀 Project created successfully!")
    console.log()
    console.log("👉 To get started:")
    console.log()
    console.log("cd", name.n)
    console.log("npm install")
    console.log("npm run dev")
    console.log()
    console.log("Happy coding!")
}

function Framework():any {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'f',
                message: 'Seleccione una opción:',
                choices: ['Vanilla', 'Vue3', 'Vue2', 'React']
            }
        ]).then(answers => {
            resolve(answers)
        });
    })
}

function CreateProject(name: any, framework: any) {
    return new Promise((resolve, reject) => {
        const { exec } = require('child_process');
        let cmd = `npx degit nohe427/nohejs-template#${framework.f} ${name.n}`
        exec(cmd, (err: any, stdout: any, stderr: any) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(stdout)
            resolve()
        });
    })
}
Init()