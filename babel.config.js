const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "11",
                safari: "11.1",
            },
            useBuiltIns: "usage",
            corejs: "3",
        },
        "@babel/preset-react"
    ],
];

module.exports = { presets };