export interface DialogflowLMInputObject {
  id: string;
  name: string;
  auto: boolean;
  webhookUsed: boolean;
  fallbackIntent?: boolean;
  responses?: DialogflowResponse[];
  events?: [
    {
      name: string;
    },
  ];
}

export interface DialogflowLMIntentData {
  text: string;
  userDefined: boolean;
  alias?: string;
  meta?: string;
}

export interface DialogflowLMIntent {
  id: string;
  data: DialogflowLMIntentData[];
  isTemplate: boolean;
  count: number;
  lang: string;
}

export interface DialogflowModel {
  intents?: DialogflowLMInputObject[];
}

export interface DialogflowLMInputParameterObject {
  name: string;
  isList: boolean;
  value: string;
  dataType: string;
}

export interface DialogflowResponse {
  parameters: DialogflowLMInputParameterObject[];
}

export interface DialogflowLMEntity {
  id: string;
  name: string;
  isOverridable?: boolean;
  isEnum?: boolean;
  automatedExpansion?: boolean;
  isRegexp?: boolean;
  allowFuzzyExtraction?: boolean;
}

export interface DialogflowLMEntries {
  value: string;
  synonyms?: string[];
}
