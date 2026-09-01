__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WorkItemToolbar",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 21
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onToolbarItemClick",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 53
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WITDialogs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 66,
                          "end": 76
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createCopyOfWorkItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 77,
                          "end": 97
                        },
                        "optional": false,
                        "computed": false,
                        "start": 66,
                        "end": 97
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 66,
                      "end": 99
                    },
                    "directive": null,
                    "start": 66,
                    "end": 100
                  }
                ],
                "start": 56,
                "end": 106
              },
              "expression": false,
              "start": 53,
              "end": 106
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 28,
            "end": 106
          }
        ],
        "start": 22,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CreateCopyOfWorkItemDialog",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 141
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDialogResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 170
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 190,
                      "end": 194
                    },
                    "start": 183,
                    "end": 195
                  }
                ],
                "start": 173,
                "end": 201
              },
              "expression": false,
              "start": 170,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 148,
            "end": 201
          }
        ],
        "start": 142,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createWorkItemDialog",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 233
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P0",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 236
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 234,
            "end": 236
          }
        ],
        "start": 233,
        "end": 237
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "dialogType",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P0",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 252
              },
              "typeArguments": null,
              "start": 250,
              "end": 252
            },
            "start": 248,
            "end": 252
          },
          "start": 238,
          "end": 252
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 254,
        "end": 257
      },
      "expression": false,
      "start": 204,
      "end": 257
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WITDialogs",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 274
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createCopyOfWorkItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 315
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createWorkItemDialog",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 348
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CreateCopyOfWorkItemDialog",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 349,
                          "end": 375
                        }
                      ],
                      "optional": false,
                      "start": 328,
                      "end": 376
                    },
                    "directive": null,
                    "start": 328,
                    "end": 377
                  }
                ],
                "start": 318,
                "end": 383
              },
              "expression": false,
              "start": 315,
              "end": 383
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 281,
            "end": 383
          }
        ],
        "start": 275,
        "end": 385
      },
      "abstract": false,
      "declare": false,
      "start": 258,
      "end": 385
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 385
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "WorkItemToolbar",
    "start": 6,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 28,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "onToolbarItemClick",
    "start": 35,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "WITDialogs",
    "start": 66,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "createCopyOfWorkItem",
    "start": 77,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "CreateCopyOfWorkItemDialog",
    "start": 115,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "getDialogResult",
    "start": 155,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189
  },
  {
    "type": "Null",
    "value": "null",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 204,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "createWorkItemDialog",
    "start": 213,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "dialogType",
    "start": 238,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "P0",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "WITDialogs",
    "start": 264,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 281,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 288,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "createCopyOfWorkItem",
    "start": 295,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "createWorkItemDialog",
    "start": 328,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "CreateCopyOfWorkItemDialog",
    "start": 349,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  }
]
```
