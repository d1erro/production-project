import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: {config: webpack.Configuration}) => {
    //paths
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve!.extensions!.push(".ts", ".tsx");

    //"@" alias for imports
    config.resolve!.alias = {
        "@": paths.src
    }

    //css loader
    config.module!.rules!.push(buildCssLoader(true));

    //svg loader
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    return config;
};
