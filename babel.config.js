module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                }
            }
        ]
    ],
    env: {
        runtime: {
            presets: [
                '@babel/preset-env'
            ],
            comments: false
        }
    }
};
