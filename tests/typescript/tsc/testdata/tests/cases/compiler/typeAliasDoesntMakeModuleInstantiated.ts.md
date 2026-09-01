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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Selector",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 124
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 127,
                  "end": 133
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  },
                  "start": 135,
                  "end": 143
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 145,
                  "end": 153
                }
              ],
              "start": 127,
              "end": 153
            },
            "declare": false,
            "start": 111,
            "end": 154
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IStatic",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 184
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "selector",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 206,
                            "end": 209
                          },
                          "start": 204,
                          "end": 209
                        },
                        "start": 196,
                        "end": 209
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IInstance",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 227,
                          "end": 236
                        },
                        "typeArguments": null,
                        "start": 227,
                        "end": 236
                      },
                      "start": 225,
                      "end": 236
                    },
                    "start": 195,
                    "end": 237
                  }
                ],
                "start": 185,
                "end": 243
              },
              "declare": false,
              "start": 167,
              "end": 243
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 160,
            "end": 243
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 274
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 275,
                "end": 278
              },
              "declare": false,
              "start": 255,
              "end": 278
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 248,
            "end": 278
          }
        ],
        "start": 20,
        "end": 280
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 280
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStatic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 305
                  },
                  "start": 296,
                  "end": 305
                },
                "typeArguments": null,
                "start": 296,
                "end": 305
              },
              "start": 294,
              "end": 305
            },
            "start": 293,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 293,
          "end": 305
        }
      ],
      "declare": true,
      "start": 281,
      "end": 306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 368
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
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 111,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Selector",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 160,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 167,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "IStatic",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "selector",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "IInstance",
    "start": 227,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 248,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 255,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "IInstance",
    "start": 265,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 281,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "IStatic",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  }
]
```
