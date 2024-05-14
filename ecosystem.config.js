module.exports = {
    apps : [{
        name: 'prisma-docs',
        cwd: '/opt/projects/prisma-docs',
        script: 'yarn serve -- --build --port 3000 --host 0.0.0.0',
    }],
};
