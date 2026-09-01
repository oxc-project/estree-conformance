__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TopLevelEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 17
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisWasAllowedButShouldNotBe",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 52
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 55,
              "end": 59
            },
            "computed": false,
            "start": 24,
            "end": 59
          }
        ],
        "start": 18,
        "end": 86
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModuleEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 108
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 132
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WasADifferentError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 161
                  },
                  "initializer": {
                    "type": "ThisExpression",
                    "start": 164,
                    "end": 168
                  },
                  "computed": false,
                  "start": 143,
                  "end": 168
                }
              ],
              "start": 133,
              "end": 221
            },
            "const": false,
            "declare": false,
            "start": 115,
            "end": 221
          }
        ],
        "start": 109,
        "end": 223
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 88,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "TopLevelEnum",
    "start": 5,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "ThisWasAllowedButShouldNotBe",
    "start": 24,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ModuleEnum",
    "start": 98,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 115,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "EnumInModule",
    "start": 120,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "WasADifferentError",
    "start": 143,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  }
]
```
