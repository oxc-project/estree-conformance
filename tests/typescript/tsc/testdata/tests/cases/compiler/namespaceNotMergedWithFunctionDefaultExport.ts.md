__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "replace-in-file",
        "raw": "'replace-in-file'",
        "start": 83,
        "end": 100
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "replaceInFile",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 134
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "config",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 143,
                      "end": 150
                    },
                    "start": 141,
                    "end": 150
                  },
                  "start": 135,
                  "end": 150
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 160
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 161,
                          "end": 168
                        },
                        "start": 161,
                        "end": 170
                      }
                    ],
                    "start": 160,
                    "end": 171
                  },
                  "start": 153,
                  "end": 171
                },
                "start": 151,
                "end": 171
              },
              "body": null,
              "expression": false,
              "start": 112,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 105,
            "end": 172
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "replaceInFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 203
            },
            "exportKind": "value",
            "start": 175,
            "end": 204
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "replaceInFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 231
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 258
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 267,
                            "end": 274
                          },
                          "start": 265,
                          "end": 274
                        },
                        "start": 259,
                        "end": 274
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 277,
                          "end": 284
                        },
                        "start": 277,
                        "end": 286
                      },
                      "start": 275,
                      "end": 286
                    },
                    "body": null,
                    "expression": false,
                    "start": 245,
                    "end": 287
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 238,
                  "end": 287
                }
              ],
              "start": 232,
              "end": 291
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 208,
            "end": 291
          }
        ],
        "start": 101,
        "end": 293
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 68,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 293
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 68,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 76,
    "end": 82
  },
  {
    "type": "String",
    "value": "'replace-in-file'",
    "start": 83,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "replaceInFile",
    "start": 121,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 175,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 182,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "replaceInFile",
    "start": 190,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 208,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "replaceInFile",
    "start": 218,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 238,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "sync",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 267,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  }
]
```
