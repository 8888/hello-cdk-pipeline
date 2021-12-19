import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class HelloCdkPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        // By default, the pipeline authenticates to GitHub using a personal access
        // token stored in Secrets Manager under the name github-token.
        input: CodePipelineSource.gitHub('8888/hello-cdk-pipeline', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });
  }
}
