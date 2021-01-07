// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotInProject, FormDialogSchema, LanguageFileImport } from '@botframework-composer/types';

export type BotBoundAssetData = {
  label: string;
  botId: string;
};

export type DialogBoundAssetData = BotBoundAssetData & {
  dialogId: string;
};

export type AssetItemKind =
  | 'qna'
  | 'lu'
  | 'lg'
  | 'lgImport'
  | 'luImport'
  | 'formSchema'
  | 'dialog'
  | 'formDialog'
  | 'formProperty'
  | 'trigger';

export type AssetItem<T> = {
  uniqueId: string;
  id: string;
  kind: AssetItemKind;
  path: string[];
  data: T;
};

export type AugmentedBotInProject = BotInProject & {
  lgImports: Record<string, LanguageFileImport[]>;
  luImports: Record<string, LanguageFileImport[]>;
  formDialogSchemas: FormDialogSchema[];
};

export type SearchResultKind = 'command' | 'asset' | 'documentation';
export type SearchKind = 'all' | SearchResultKind;

export type SearchResult<T> = {
  kind: SearchResultKind;
  id: string;
  linkUrl: string;
  icon?: string;
  data: T;
};

export type SearchDocumentResult = {
  Title: string;
  Url: string;
  Caption: string;
};

export type QuickCommandType =
  | 'Undo'
  | 'Redo'
  | 'SelectAll'
  | 'Delete'
  | 'ActiveLanguage'
  | 'StartBots'
  | 'TestInEmulator'
  | 'Notifications'
  | 'Home'
  | 'Design'
  | 'BotResponses'
  | 'UserInput'
  | 'QnA'
  | 'Diagnostics'
  | 'Publish'
  | 'ProjectSettings'
  | 'Forms'
  | 'PackageManager'
  | 'ComposerSettings'
  | 'FilterDialog'
  | 'ZoomIn'
  | 'ZoomOut'
  | 'ResetView'
  | 'ShowCode'
  | 'HideCode'
  | 'CreateANewSkill'
  | 'OpenAnExistingSkill'
  | 'ConnectToARemoteSkill'
  | 'AddADialog'
  | 'StartBot'
  | 'StopBot'
  | 'CreateOrEditSkillManifest'
  | 'ExportThisBotAsZip'
  | 'ProjectSettings'
  | 'AddATrigger'
  | 'AddNewKnowledgeBase'
  | 'RemoveThisDialog'
  | 'EditSchema'
  | 'RemoveThisTrigger'
  | 'Cut'
  | 'Copy'
  | 'DisableAction'
  | 'EnableAction'
  | 'Delete'
  | 'Paste'
  | 'MoveToNewDialog'
  | 'AskForText'
  | 'AskForNumber'
  | 'AskForConfirmation'
  | 'AskForMultichoice'
  | 'AskForFileOrAttachment'
  | 'AskForDateOrTime'
  | 'OauthLogin'
  | 'AskActivity'
  | 'IfCondition'
  | 'SwitchCondition'
  | 'LoopForEachItem'
  | 'LoopForEachPage'
  | 'ContinueLoop'
  | 'BreakOutOfLoop'
  | 'BeginNewDialog'
  | 'EndDialog'
  | 'CancelAllActiveDialogs'
  | 'EndTurn'
  | 'RepeatThisDialog'
  | 'ReplaceDialog'
  | 'SetAProperty'
  | 'SetProperties'
  | 'DeleteAProperty'
  | 'DeleteProperties'
  | 'EditAnArrayProperty'
  | 'UpdateActivity'
  | 'DeleteActivity'
  | 'GetActivityMembers'
  | 'GetConversationMembers'
  | 'ConnectToASkill'
  | 'SendAnHttpRequest'
  | 'EmitACustomEvent'
  | 'OauthLogin'
  | 'ConnectToQnaKnowledgebase'
  | 'SignOutUser'
  | 'LogToConsole'
  | 'ThrowException'
  | 'EmitATraceEvent'
  | 'EmitATelemetryTrackEvent'
  | 'AddAlternativePhrasing'
  | 'PublishSelectedBots'
  | 'PullFromSelectedProfile'
  | 'ManageProfile'
  | 'BotLanguage'
  | 'AddNewPublishProfile'
  | 'DeleteProject'
  | 'AddNewForm'
  | 'ViewDialog'
  | 'GenerateDialog'
  | 'Delete'
  | 'AddProperty'
  | 'ImportSchema'
  | 'ExportJson'
  | 'ClearAll'
  | 'GenerateDialog';

export type QuickCommandPredictionIntent = 'Commands' | 'None';

export type QuickCommandPredictionEntity = {
  type: QuickCommandType;
  text: string;
  startIndex: number;
  length: number;
  score: number;
};

export type QuickCommandPredictionResult = {
  query: string;
  prediction: {
    topIntent: QuickCommandPredictionIntent;
    intents: Partial<Record<QuickCommandPredictionIntent, { score: number }>>;
    entities: Partial<Record<QuickCommandType, string[]>> & {
      $instance: Partial<Record<QuickCommandType, QuickCommandPredictionEntity[]>>;
    };
  };
};