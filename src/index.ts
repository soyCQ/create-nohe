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
                choices: ['None', 'Vanilla', 'Vue3', 'Vue2', 'React']
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
        if (framework == "None") {
            resolve(true)
            return
        }
        
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
        `"@nohejs/core": "latest"`
    ]
    let devDependencies:string[] = []
    if (framework == "Vue3") {
        devDependencies.push(`"@vitejs/plugin-vue": "latest"`)

        dependencies.push(`"vue": "^3.5.42"`)
        dependencies.push(`"pinia": "^4.0.3"`)
        dependencies.push(`"vue-router": "^5.3.0"`)
    }

    if (framework == "Vue2") {
        devDependencies.push(`"@vitejs/plugin-vue2": "latest"`)
        
        dependencies.push(`"vue": "^2.7.0-0"`)
        dependencies.push(`"pinia": "^2.3.0"`)
        dependencies.push(`"vue-router": "^3.6.5"`)
    }
    if (framework == "React") {
        devDependencies.push(`"@vitejs/plugin-react": "latest"`)
        devDependencies.push(`"@types/react": "^19.0.8"`)
        devDependencies.push(`"@types/react-dom": "^19.0.3"`)
        devDependencies.push(`"react-refresh": "^0.16.0"`)

        dependencies.push(`"react": "18"`)
        dependencies.push(`"react-dom": "18"`)
    }

    if (framework == "None") {
        const file = `import { defineConfig } from '@nohejs/core'

export default defineConfig({
    outputDir: './build'
})`
        fs.writeFile(path.join(name, 'nohe.config.ts'), file, err => {
            if (err) throw err;
        })
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