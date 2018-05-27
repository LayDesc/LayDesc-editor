const path = require('path');
const srcDirectoryName = "src";
const distDirectoryName = "dist";
const mode = "development";

// electron
const electronSrcDirectory = path.join(__dirname, srcDirectoryName,"electron");
const electronDistDirectory = path.join(__dirname, distDirectoryName);

// client
const clientSrcDirectory = path.join(__dirname, srcDirectoryName, "client");
const clientDistDirectory = path.join(__dirname, distDirectoryName, "client");
const clientWindowNames = {
    main: "window-main",
    generator: "window-generator",
};

const electron = {
    target: "electron-main",
    mode: mode,
    entry:[
        path.join(electronSrcDirectory, "main.ts"),
    ],
    output: {
        filename: 'main.js',
        path: electronDistDirectory,
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
        ]
    }
};

const clientsOptions = {
    target: "electron-renderer",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: "ts-loader"
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src", "link:href"],
                            interpolate: true,
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                loaders: [
                    {
                        loader: "file-loader"
                    },
                ],
            },
            {
                test: /\.css$/,
                loaders: [
                    {
                        loader: "file-loader",
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
};

const client_main = {
    mode: mode,
    entry: [
        path.join( clientSrcDirectory, clientWindowNames.main, "main.ts" ),
    ],
    devServer: {
        contentBase: path.join( clientSrcDirectory, clientWindowNames.main),
        compress: true,
        port: 9000,
    },
    output: {
        filename: 'main.js',
        path: path.join(clientDistDirectory, clientWindowNames.main),
    },
    target: clientsOptions.target,
    resolve: clientsOptions.resolve,
    module: clientsOptions.module,
};

const client_generator = {
    mode: mode,
    entry: [
        path.join( clientSrcDirectory, clientWindowNames.generator, "main.ts" ),
    ],
    devServer: {
        contentBase: path.join( clientSrcDirectory, clientWindowNames.generator),
        compress: true,
        port: 9000,
    },
    output: {
        filename: 'main.js',
        path: path.join(clientDistDirectory, clientWindowNames.generator),
    },
    target: clientsOptions.target,
    resolve: clientsOptions.resolve,
    module: clientsOptions.module,
};


module.exports = [ electron, client_main, client_generator];
