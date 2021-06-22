module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 10,
                },
            },
        ],
    ],
    env: {
        runtime: {
            presets: [
                ['@babel/preset-env', {
                    targets: {
                        android: '4.1',
                        ios: '7',
                    },
                    modules: 'commonjs',
                }],
            ],
            comments: false,
        },
    },
};
