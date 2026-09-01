__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TopLevel",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 39
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
                    "name": "duplicate1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 60
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 68,
                          "end": 74
                        },
                        "start": 65,
                        "end": 74
                      },
                      "start": 62,
                      "end": 74
                    },
                    "start": 60,
                    "end": 74
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 50,
                  "end": 75
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 94
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 102,
                          "end": 108
                        },
                        "start": 99,
                        "end": 108
                      },
                      "start": 96,
                      "end": 108
                    },
                    "start": 94,
                    "end": 108
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 84,
                  "end": 109
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 128
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 136,
                          "end": 142
                        },
                        "start": 133,
                        "end": 142
                      },
                      "start": 130,
                      "end": 142
                    },
                    "start": 128,
                    "end": 142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 118,
                  "end": 143
                }
              ],
              "start": 40,
              "end": 149
            },
            "declare": false,
            "start": 21,
            "end": 149
          }
        ],
        "start": 15,
        "end": 151
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 152,
      "end": 161
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
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
    "value": "global",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "TopLevel",
    "start": 31,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "duplicate1",
    "start": 50,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "duplicate2",
    "start": 84,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 99,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "duplicate3",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
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
        "value": "./file1",
        "raw": "\"./file1\"",
        "start": 7,
        "end": 16
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 17
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TopLevel",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 57
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 78
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    },
                    "start": 80,
                    "end": 88
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 68,
                  "end": 89
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 108
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 112,
                      "end": 118
                    },
                    "start": 110,
                    "end": 118
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 98,
                  "end": 119
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 138
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 142,
                      "end": 148
                    },
                    "start": 140,
                    "end": 148
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 128,
                  "end": 149
                }
              ],
              "start": 58,
              "end": 155
            },
            "declare": false,
            "start": 39,
            "end": 155
          }
        ],
        "start": 33,
        "end": 157
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 18,
      "end": 157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 158,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"./file1\"",
    "start": 7,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 18,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "TopLevel",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "duplicate1",
    "start": 68,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "duplicate2",
    "start": 98,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "duplicate3",
    "start": 128,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  }
]
```
