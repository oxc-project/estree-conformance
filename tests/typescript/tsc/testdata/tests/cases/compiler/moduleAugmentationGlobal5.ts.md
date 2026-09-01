__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "A",
        "raw": "\"A\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 61
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 64
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false,
                        "start": 63,
                        "end": 64
                      }
                    ],
                    "start": 62,
                    "end": 65
                  },
                  "declare": false,
                  "start": 42,
                  "end": 65
                }
              ],
              "start": 32,
              "end": 71
            },
            "kind": "global",
            "declare": false,
            "global": true,
            "start": 25,
            "end": 71
          }
        ],
        "start": 19,
        "end": 73
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 52,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "B",
        "raw": "\"B\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 61
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 64
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false,
                        "start": 63,
                        "end": 64
                      }
                    ],
                    "start": 62,
                    "end": 65
                  },
                  "declare": false,
                  "start": 42,
                  "end": 65
                }
              ],
              "start": 32,
              "end": 71
            },
            "kind": "global",
            "declare": false,
            "global": true,
            "start": 25,
            "end": 71
          }
        ],
        "start": 19,
        "end": 73
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 52,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "A",
        "raw": "\"A\"",
        "start": 71,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 75
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "B",
        "raw": "\"B\"",
        "start": 83,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 76,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 64,
  "end": 88
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 64,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 76,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  }
]
```
