# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

# What's going on in here?
- Inside of `MyLambdaStack: Stack` we instantiate a new `Function`
- Inside of `MyPiplelineAppStage: Stage` we instantiate a new `MyLambdaStack`
- Inside of `HelloCdkPipelineStack: Stack` we instantiate a new `pipeline: CodePipeline`
- We add a stage to `pipeline` that instantiates a new `MyPipelineAppStage`
- We instantiate a new `HelloCdkPipleStack: Stack` with its parent scope set as a new instance of an `App`

Function -> Stack -> Stage -> CodePipeline -> Stack -> App

## Function
`Function` extends `FunctionBase` extends `Resource` extends `Construct`
```
/**
 * Deploys a file from inside the construct library as a function.
 *
 * The supplied file is subject to the 4096 bytes limit of being embedded in a
 * CloudFormation template.
 *
 * The construct includes an associated role with the lambda.
 *
 * This construct does not yet reproduce all features from the underlying resource
 * library.
 *
 * @stability stable
 */
```

## Stack
`Stack` extends `Construct`
```
/**
 * A root construct which represents a single CloudFormation stack.
 *
 * @stability stable
 */
```

## Stage
`Stage` extends `Construct`
```
}
/**
 * An abstract application modeling unit consisting of Stacks that should be deployed together.
 *
 * Derive a subclass of `Stage` and use it to model a single instance of your
 * application.
 *
 * You can then instantiate your subclass multiple times to model multiple
 * copies of your application which should be be deployed to different
 * environments.
 *
 * @stability stable
 */
```

## CodePipeline
`CodePipeline` extends `PipelineBase` extends `Construct`
```
/**
 * A CDK Pipeline that uses CodePipeline to deploy CDK apps.
 *
 * This is a `Pipeline` with its `engine` property set to
 * `CodePipelineEngine`, and exists for nicer ergonomics for
 * users that don't need to switch out engines.
 *
 * @stability stable
 */
```

## App
`App` extends `Stage` extends `Construct`
```
/**
 * A construct which represents an entire CDK app. This construct is normally the root of the construct tree.
 *
 * You would normally define an `App` instance in your program's entrypoint,
 * then define constructs where the app is used as the parent scope.
 *
 * After all the child constructs are defined within the app, you should call
 * `app.synth()` which will emit a "cloud assembly" from this app into the
 * directory specified by `outdir`. Cloud assemblies includes artifacts such as
 * CloudFormation templates and assets that are needed to deploy this app into
 * the AWS cloud.
 *
 * @see https://docs.aws.amazon.com/cdk/latest/guide/apps.html
 * @stability stable
 */
```

## Construct
```
/**
 * Represents the building block of the construct graph.
 *
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 *
 * @stability stable
 */
```
