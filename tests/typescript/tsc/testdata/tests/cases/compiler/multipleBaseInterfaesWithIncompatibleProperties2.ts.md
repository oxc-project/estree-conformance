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
        "name": "http",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TcpSocketConnectOpts",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 113
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
                      "name": "port",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 124
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      },
                      "start": 124,
                      "end": 132
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 120,
                    "end": 133
                  }
                ],
                "start": 114,
                "end": 137
              },
              "declare": false,
              "start": 83,
              "end": 137
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 76,
            "end": 137
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AgentOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 170
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Partial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 186
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TcpSocketConnectOpts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 207
                        },
                        "typeArguments": null,
                        "start": 187,
                        "end": 207
                      }
                    ],
                    "start": 186,
                    "end": 208
                  },
                  "start": 179,
                  "end": 208
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keepAlive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 224
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 227,
                            "end": 234
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 237,
                            "end": 246
                          }
                        ],
                        "start": 227,
                        "end": 246
                      },
                      "start": 225,
                      "end": 246
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 215,
                    "end": 247
                  }
                ],
                "start": 209,
                "end": 251
              },
              "declare": false,
              "start": 148,
              "end": 251
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 141,
            "end": 251
          }
        ],
        "start": 72,
        "end": 253
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 57,
      "end": 253
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tls",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 268
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConnectionOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 307
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "port",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 318
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 321,
                            "end": 327
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 330,
                            "end": 339
                          }
                        ],
                        "start": 321,
                        "end": 339
                      },
                      "start": 319,
                      "end": 339
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 314,
                    "end": 340
                  }
                ],
                "start": 308,
                "end": 344
              },
              "declare": false,
              "start": 280,
              "end": 344
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 273,
            "end": 344
          }
        ],
        "start": 269,
        "end": 346
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 255,
      "end": 346
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AgentOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 370
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "http",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 383
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "AgentOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 396
            },
            "optional": false,
            "computed": false,
            "start": 379,
            "end": 396
          },
          "typeArguments": null,
          "start": 379,
          "end": 396
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "tls",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 401
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConnectionOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 419
            },
            "optional": false,
            "computed": false,
            "start": 398,
            "end": 419
          },
          "typeArguments": null,
          "start": 398,
          "end": 419
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maxCachedSessions",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 486,
                    "end": 492
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 495,
                    "end": 504
                  }
                ],
                "start": 486,
                "end": 504
              },
              "start": 484,
              "end": 504
            },
            "accessibility": null,
            "static": false,
            "start": 466,
            "end": 505
          }
        ],
        "start": 420,
        "end": 507
      },
      "declare": false,
      "start": 348,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 507
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "TcpSocketConnectOpts",
    "start": 93,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "port",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 141,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 148,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "AgentOptions",
    "start": 158,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 171,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 179,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "TcpSocketConnectOpts",
    "start": 187,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "keepAlive",
    "start": 215,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "boolean",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 237,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 255,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "tls",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 273,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 280,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "ConnectionOptions",
    "start": 290,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "port",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 330,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 348,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "AgentOptions",
    "start": 358,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 371,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "AgentOptions",
    "start": 384,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "tls",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "ConnectionOptions",
    "start": 402,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "maxCachedSessions",
    "start": 466,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 495,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  }
]
```
