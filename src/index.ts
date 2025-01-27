#!/usr/bin/env node
import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'

const Init = async () => {
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
    console.log("🚀 Project Information:")
    console.log()
    console.log("📦 Project name: ", name.n)
    console.log("🛠️ Framework: ", framework.f)
    console.log()
    console.log(" Creating project...")

    await CreateProject(name.n)
    await CreateFramework(name.n, framework.f)
    await CreatePackage(name.n, framework.f)
    
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
                message: 'Select a framework',
                choices: ['Vanilla', 'Vue3', 'Vue2', 'React']
            }
        ]).then(answers => {
            resolve(answers)
        });
    })
}

function CreateProject(name: any) {
    return new Promise((resolve, reject) => {
        const { exec } = require('child_process');
        let cmd = `npx degit cq9dev/create-nohe#templateBase ${name}`
        exec(cmd, (err: any, stdout: any, stderr: any) => {
            if (err) {
                console.error(err)
                return
            }
            resolve(true)
        });
    })
}
function CreateFramework(name: any, framework: any) {
    return new Promise((resolve, reject) => {
        const { exec } = require('child_process');
        let cmd = `npx degit cq9dev/create-nohe#template${framework} ${name} --force`
        exec(cmd, (err: any, stdout: any, stderr: any) => {
            if (err) {
                console.error(err)
                return
            }
            resolve(true)
        });
    })
}

function CreatePackage(name:string, framework:any) {
    let dependencies = [
        `"@nohejs/cli": "latest"`,
        `"@nohejs/core": "latest"`
    ]
    let devDependencies:string[] = []
    if (framework == "Vue3") {
        dependencies.push(`"@vitejs/plugin-vue": "^2.3.1"`)
        dependencies.push(`"vue": "^3.5.13"`)
        dependencies.push(`"pinia": "^2.3.0"`)
        dependencies.push(`"vue-router": "^4.5.0"`)
    }

    if (framework == "Vue2") {
        dependencies.push(`"@vitejs/plugin-vue2": "^2.3.1"`)
        dependencies.push(`"vue": "^3.5.13"`)
        dependencies.push(`"pinia": "^2.3.0"`)
        dependencies.push(`"vue-router": "^4.5.0"`)
    }
    if (framework == "React") {
        dependencies.push(`"react": "18"`)
        dependencies.push(`"react-dom": "18"`)

        devDependencies.push(`"@farmfe/plugin-react": "^1.2.6"`)
        devDependencies.push(`"@types/react": "^19.0.8"`)
        devDependencies.push(`"@types/react-dom": "^19.0.3"`)
        devDependencies.push(`"react-refresh": "^0.16.0"`)
    }

    const file = `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "scripts": {
    "dev": "node nohe start",
    "build": "node nohe build",
    "clean": "node nohe clean",
    "config": "node nohe config"
  },
  "author": "",
  "license": "ISC",
  ${devDependencies.length > 0 ? `"devDependencies": {\n\t\t${devDependencies.join(',\n\t\t')}\n\t},`:''}
  "dependencies": {
    ${dependencies.join(',\n\t\t')}
  }
}`
    fs.writeFile(path.join(name, 'package.json'), file, err => {
        if (err) throw err;
    })
}
Init()