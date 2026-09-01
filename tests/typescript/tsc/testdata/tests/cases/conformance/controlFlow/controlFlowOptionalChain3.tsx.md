__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 114
          },
          "start": 109,
          "end": 114
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 120,
        "end": 127
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 102,
      "end": 128
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 143
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 153,
                "end": 160
              },
              "start": 151,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 148,
            "end": 161
          }
        ],
        "start": 144,
        "end": 163
      },
      "declare": false,
      "start": 130,
      "end": 163
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 179
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 188
                  },
                  "typeArguments": null,
                  "start": 185,
                  "end": 188
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 191,
                  "end": 200
                }
              ],
              "start": 185,
              "end": 200
            },
            "start": 183,
            "end": 200
          },
          "start": 180,
          "end": 200
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 213
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 218
                  },
                  "optional": true,
                  "computed": false,
                  "start": 210,
                  "end": 218
                },
                "start": 210,
                "end": 218
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 223,
                "end": 228
              },
              "start": 210,
              "end": 228
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 239
                  },
                  "directive": null,
                  "start": 236,
                  "end": 240
                }
              ],
              "start": 230,
              "end": 244
            },
            "alternate": null,
            "start": 206,
            "end": 244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 250
            },
            "directive": null,
            "start": 247,
            "end": 251
          }
        ],
        "start": 202,
        "end": 253
      },
      "expression": false,
      "start": 165,
      "end": 253
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 269
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 278
                  },
                  "typeArguments": null,
                  "start": 275,
                  "end": 278
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 281,
                  "end": 290
                }
              ],
              "start": 275,
              "end": 290
            },
            "start": 273,
            "end": 290
          },
          "start": 270,
          "end": 290
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 303
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 305,
                    "end": 308
                  },
                  "optional": true,
                  "computed": false,
                  "start": 300,
                  "end": 308
                },
                "start": 300,
                "end": 308
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 313,
                "end": 318
              },
              "start": 300,
              "end": 318
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 329
                  },
                  "directive": null,
                  "start": 326,
                  "end": 330
                }
              ],
              "start": 320,
              "end": 334
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 349
                  },
                  "directive": null,
                  "start": 346,
                  "end": 350
                }
              ],
              "start": 340,
              "end": 354
            },
            "start": 296,
            "end": 354
          }
        ],
        "start": 292,
        "end": 356
      },
      "expression": false,
      "start": 255,
      "end": 356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 372
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 378
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 378
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 375,
              "end": 378
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 389,
                            "end": 392
                          },
                          "typeArguments": null,
                          "start": 389,
                          "end": 392
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 395,
                          "end": 404
                        }
                      ],
                      "start": 389,
                      "end": 404
                    },
                    "start": 387,
                    "end": 404
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 384,
                  "end": 404
                }
              ],
              "start": 382,
              "end": 406
            },
            "start": 380,
            "end": 406
          },
          "start": 373,
          "end": 406
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 426,
                  "end": 429
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 425,
                "end": 430
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n      ",
                  "raw": "\n      ",
                  "start": 430,
                  "end": 437
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ChainExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 438,
                            "end": 441
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 443,
                            "end": 446
                          },
                          "optional": true,
                          "computed": false,
                          "start": 438,
                          "end": 446
                        },
                        "start": 438,
                        "end": 446
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 451,
                        "end": 456
                      },
                      "start": 438,
                      "end": 456
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 460,
                      "end": 465
                    },
                    "start": 438,
                    "end": 465
                  },
                  "start": 437,
                  "end": 466
                },
                {
                  "type": "JSXText",
                  "value": "\n      ",
                  "raw": "\n      ",
                  "start": 466,
                  "end": 473
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 474,
                        "end": 477
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 481
                      },
                      "optional": false,
                      "computed": false,
                      "start": 474,
                      "end": 481
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 484,
                      "end": 490
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 493,
                      "end": 500
                    },
                    "start": 474,
                    "end": 500
                  },
                  "start": 473,
                  "end": 501
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 501,
                  "end": 506
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 508,
                  "end": 511
                },
                "start": 506,
                "end": 512
              },
              "start": 425,
              "end": 512
            },
            "start": 412,
            "end": 517
          }
        ],
        "start": 408,
        "end": 519
      },
      "expression": false,
      "start": 358,
      "end": 519
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 530,
        "end": 535
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 552,
                      "end": 559
                    },
                    "start": 550,
                    "end": 559
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 548,
                  "end": 560
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 565,
                      "end": 572
                    },
                    "start": 563,
                    "end": 572
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 561,
                  "end": 572
                }
              ],
              "start": 546,
              "end": 574
            },
            "start": 544,
            "end": 574
          },
          "start": 536,
          "end": 574
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 591
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 593,
                      "end": 594
                    },
                    "optional": true,
                    "computed": false,
                    "start": 584,
                    "end": 594
                  },
                  "start": 584,
                  "end": 594
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 599,
                  "end": 604
                },
                "start": 584,
                "end": 604
              },
              "operator": "||",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 615
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "optional": false,
                "computed": false,
                "start": 608,
                "end": 617
              },
              "start": 584,
              "end": 617
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 632
                  },
                  "directive": null,
                  "start": 625,
                  "end": 633
                }
              ],
              "start": 619,
              "end": 637
            },
            "alternate": null,
            "start": 580,
            "end": 637
          }
        ],
        "start": 576,
        "end": 639
      },
      "expression": false,
      "start": 521,
      "end": 639
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 102,
  "end": 639
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 102,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 115,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 130,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 148,
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
    "value": "boolean",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 165,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 191,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 219,
    "end": 222
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "function",
    "start": 255,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 281,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 303,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 309,
    "end": 312
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 358,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "Test3",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 389,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 395,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 425,
    "end": 426
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 441,
    "end": 443
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 447,
    "end": 450
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 457,
    "end": 459
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 460,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 482,
    "end": 483
  },
  {
    "type": "String",
    "value": "\"true\"",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "\"false\"",
    "start": 493,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 507,
    "end": 508
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 521,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 536,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 552,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 565,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 584,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 591,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 595,
    "end": 598
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 605,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 608,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 625,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  }
]
```
