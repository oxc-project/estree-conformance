__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 121
          },
          "start": 111,
          "end": 121
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 127,
        "end": 134
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 104,
      "end": 135
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 151
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "locale",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 156,
            "end": 170
          }
        ],
        "start": 154,
        "end": 172
      },
      "declare": false,
      "start": 137,
      "end": 173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 185
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 205
              },
              "typeArguments": null,
              "start": 196,
              "end": 205
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 186,
            "end": 205
          }
        ],
        "start": 185,
        "end": 206
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 223
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 233,
                              "end": 234
                            },
                            "typeArguments": null,
                            "start": 233,
                            "end": 234
                          },
                          "start": 231,
                          "end": 234
                        },
                        "start": 226,
                        "end": 234
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "React",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 244
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ReactNode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 245,
                            "end": 254
                          },
                          "start": 239,
                          "end": 254
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 254
                      },
                      "start": 236,
                      "end": 254
                    },
                    "start": 225,
                    "end": 254
                  },
                  "start": 223,
                  "end": 254
                },
                "accessibility": null,
                "static": false,
                "start": 215,
                "end": 255
              }
            ],
            "start": 209,
            "end": 257
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "typeArguments": null,
            "start": 260,
            "end": 261
          }
        ],
        "start": 209,
        "end": 261
      },
      "declare": false,
      "start": 175,
      "end": 262
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 285
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 305
              },
              "typeArguments": null,
              "start": 296,
              "end": 305
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 286,
            "end": 305
          }
        ],
        "start": 285,
        "end": 306
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 319
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 320,
                    "end": 321
                  }
                ],
                "start": 319,
                "end": 322
              },
              "start": 314,
              "end": 322
            },
            "start": 312,
            "end": 322
          },
          "start": 307,
          "end": 322
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 328
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 336
            },
            "start": 325,
            "end": 336
          },
          "typeArguments": null,
          "start": 325,
          "end": 336
        },
        "start": 323,
        "end": 336
      },
      "body": null,
      "expression": false,
      "start": 264,
      "end": 337
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 358
                },
                "typeArguments": null,
                "start": 349,
                "end": 358
              },
              "start": 347,
              "end": 358
            },
            "start": 345,
            "end": 358
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "locale",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 369
                },
                "value": {
                  "type": "Literal",
                  "value": "en",
                  "raw": "'en'",
                  "start": 371,
                  "end": 375
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 363,
                "end": 375
              }
            ],
            "start": 361,
            "end": 377
          },
          "definite": false,
          "start": 345,
          "end": 377
        }
      ],
      "declare": false,
      "start": 339,
      "end": 378
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "el",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 503
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 507,
                "end": 511
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 518
                  },
                  "start": 512,
                  "end": 519
                }
              ],
              "selfClosing": false,
              "start": 506,
              "end": 520
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 522,
                      "end": 527
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 533,
                        "end": 536
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 532,
                      "end": 537
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 538,
                            "end": 543
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locale",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 550
                          },
                          "optional": false,
                          "computed": false,
                          "start": 538,
                          "end": 550
                        },
                        "start": 537,
                        "end": 551
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 553,
                        "end": 556
                      },
                      "start": 551,
                      "end": 557
                    },
                    "start": 532,
                    "end": 557
                  },
                  "id": null,
                  "generator": false,
                  "start": 521,
                  "end": 557
                },
                "start": 520,
                "end": 558
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 560,
                "end": 564
              },
              "start": 558,
              "end": 565
            },
            "start": 506,
            "end": 565
          },
          "definite": false,
          "start": 501,
          "end": 565
        }
      ],
      "declare": false,
      "start": 495,
      "end": 566
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Comp",
          "optional": false,
          "typeAnnotation": null,
          "start": 615,
          "end": 619
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 625,
                  "end": 627
                },
                "start": 622,
                "end": 627
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 629,
                  "end": 637
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 640,
                      "end": 645
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 651,
                        "end": 654
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 650,
                      "end": 655
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 656,
                            "end": 661
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "locale",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 662,
                            "end": 668
                          },
                          "optional": false,
                          "computed": false,
                          "start": 656,
                          "end": 668
                        },
                        "start": 655,
                        "end": 669
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 671,
                        "end": 674
                      },
                      "start": 669,
                      "end": 675
                    },
                    "start": 650,
                    "end": 675
                  },
                  "id": null,
                  "generator": false,
                  "start": 639,
                  "end": 675
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 629,
                "end": 675
              }
            ],
            "start": 620,
            "end": 677
          }
        ],
        "optional": false,
        "start": 615,
        "end": 678
      },
      "directive": null,
      "start": 615,
      "end": 679
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 104,
  "end": 679
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 116,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 122,
    "end": 126
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 137,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 142,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 175,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 188,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "children",
    "start": 215,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 245,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "&",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 264,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 272,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 288,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 296,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "BaseProps",
    "start": 349,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "locale",
    "start": 363,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "'en'",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 495,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 532,
    "end": 533
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 543,
    "end": 544
  },
  {
    "type": "JSXIdentifier",
    "value": "locale",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 552,
    "end": 553
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 559,
    "end": 560
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 560,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 615,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 622,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "bp",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 629,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 656,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 661,
    "end": 662
  },
  {
    "type": "JSXIdentifier",
    "value": "locale",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 670,
    "end": 671
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  }
]
```
