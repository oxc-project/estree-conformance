__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "dependency",
        "raw": "\"dependency\"",
        "start": 15,
        "end": 27
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
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 55
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 56,
                "end": 58
              },
              "declare": false,
              "start": 41,
              "end": 58
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 34,
            "end": 58
          }
        ],
        "start": 28,
        "end": 60
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 69
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "dependency",
            "raw": "\"dependency\"",
            "start": 86,
            "end": 98
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 106
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 110,
                        "end": 127
                      },
                      "value": {
                        "type": "Literal",
                        "value": "import",
                        "raw": "\"import\"",
                        "start": 129,
                        "end": 137
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 110,
                      "end": 137
                    }
                  ],
                  "start": 108,
                  "end": 139
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 102,
                "end": 139
              }
            ],
            "start": 100,
            "end": 141
          },
          "qualifier": null,
          "typeArguments": null,
          "start": 79,
          "end": 142
        },
        "typeArguments": null,
        "start": 72,
        "end": 142
      },
      "declare": false,
      "start": 62,
      "end": 143
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 151
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "dependency",
          "raw": "\"dependency\"",
          "start": 161,
          "end": 173
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 181
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "resolution-mode",
                      "raw": "\"resolution-mode\"",
                      "start": 185,
                      "end": 202
                    },
                    "value": {
                      "type": "Literal",
                      "value": "require",
                      "raw": "\"require\"",
                      "start": 204,
                      "end": 213
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 185,
                    "end": 213
                  }
                ],
                "start": 183,
                "end": 215
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 177,
              "end": 215
            }
          ],
          "start": 175,
          "end": 217
        },
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 223
        },
        "typeArguments": null,
        "start": 154,
        "end": 223
      },
      "declare": false,
      "start": 144,
      "end": 224
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 233
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "dependency",
            "raw": "\"dependency\"",
            "start": 250,
            "end": 262
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 274
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 287
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "Literal",
                            "value": "value",
                            "raw": "\"value\"",
                            "start": 296,
                            "end": 303
                          },
                          "id": null,
                          "generator": false,
                          "start": 290,
                          "end": 303
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 289,
                        "end": 306
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 286,
                      "end": 306
                    }
                  ],
                  "start": 276,
                  "end": 313
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 313
              }
            ],
            "start": 264,
            "end": 316
          },
          "qualifier": null,
          "typeArguments": null,
          "start": 243,
          "end": 317
        },
        "typeArguments": null,
        "start": 236,
        "end": 317
      },
      "declare": false,
      "start": 226,
      "end": 318
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 327
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "dependency",
          "raw": "\"dependency\"",
          "start": 337,
          "end": 349
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 361
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "resolution-mode",
                      "raw": "\"resolution-mode\"",
                      "start": 373,
                      "end": 390
                    },
                    "value": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": "import",
                          "raw": "\"import\"",
                          "start": 399,
                          "end": 407
                        },
                        "id": null,
                        "generator": false,
                        "start": 393,
                        "end": 407
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 392,
                      "end": 410
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 373,
                    "end": 410
                  }
                ],
                "start": 363,
                "end": 417
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 357,
              "end": 417
            }
          ],
          "start": 351,
          "end": 420
        },
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 426
        },
        "typeArguments": null,
        "start": 330,
        "end": 426
      },
      "declare": false,
      "start": 320,
      "end": 427
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 436
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "dependency",
          "raw": "\"dependency\"",
          "start": 446,
          "end": 458
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 470
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "resolution-mode",
                      "raw": "\"resolution-mode\"",
                      "start": 482,
                      "end": 499
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 501,
                      "end": 502
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 482,
                    "end": 502
                  }
                ],
                "start": 472,
                "end": 509
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 466,
              "end": 509
            }
          ],
          "start": 460,
          "end": 512
        },
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 514,
          "end": 518
        },
        "typeArguments": null,
        "start": 439,
        "end": 518
      },
      "declare": false,
      "start": 429,
      "end": 519
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 528
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSImportType",
        "source": {
          "type": "Literal",
          "value": "dependency",
          "raw": "\"dependency\"",
          "start": 538,
          "end": 550
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 562
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "resolution-mode",
                      "raw": "\"resolution-mode\"",
                      "start": 574,
                      "end": 591
                    },
                    "value": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "import",
                            "cooked": "import"
                          },
                          "tail": true,
                          "start": 593,
                          "end": 601
                        }
                      ],
                      "expressions": [],
                      "start": 593,
                      "end": 601
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 574,
                    "end": 601
                  }
                ],
                "start": 564,
                "end": 608
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 558,
              "end": 608
            }
          ],
          "start": 552,
          "end": 611
        },
        "qualifier": {
          "type": "Identifier",
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 617
        },
        "typeArguments": null,
        "start": 531,
        "end": 617
      },
      "declare": false,
      "start": 521,
      "end": 618
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 618
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
    "value": "\"dependency\"",
    "start": 15,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 34,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 41,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 72,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"dependency\"",
    "start": 86,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 110,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 144,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"dependency\"",
    "start": 161,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 185,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 204,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 226,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 236,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "\"dependency\"",
    "start": 250,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 270,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 293,
    "end": 295
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 296,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 320,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "String",
    "value": "\"dependency\"",
    "start": 337,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 373,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 396,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 399,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 422,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 429,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 434,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "String",
    "value": "\"dependency\"",
    "start": 446,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 482,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 521,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "String",
    "value": "\"dependency\"",
    "start": 538,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 574,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Template",
    "value": "`import`",
    "start": 593,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 617,
    "end": 618
  }
]
```
