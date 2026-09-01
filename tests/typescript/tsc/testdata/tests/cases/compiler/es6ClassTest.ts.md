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
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "goo",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 16,
            "end": 35
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 54
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 74
                    },
                    "start": 66,
                    "end": 75
                  }
                ],
                "start": 56,
                "end": 81
              },
              "expression": false,
              "start": 52,
              "end": 81
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 40,
            "end": 81
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 98
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 103,
                "end": 106
              },
              "expression": false,
              "start": 99,
              "end": 106
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 87,
            "end": 106
          }
        ],
        "start": 10,
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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 138
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 151
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 159,
                "end": 165
              },
              "start": 158,
              "end": 165
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 155,
            "end": 166
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "gar",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 174,
              "end": 175
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 168,
            "end": 176
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 181
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 182,
                "end": 188
              },
              "start": 181,
              "end": 188
            },
            "value": {
              "type": "Literal",
              "value": "zoo",
              "raw": "\"zoo\"",
              "start": 191,
              "end": 196
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 197
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 202,
                "end": 205
              },
              "start": 200,
              "end": 205
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 199,
            "end": 206
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 212
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
                      "value": 0,
                      "raw": "0",
                      "start": 224,
                      "end": 225
                    },
                    "start": 217,
                    "end": 226
                  }
                ],
                "start": 215,
                "end": 228
              },
              "expression": false,
              "start": 212,
              "end": 228
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 209,
            "end": 228
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "boo",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 242
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 242,
              "end": 245
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 231,
            "end": 245
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "boo",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 258
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 261
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "start": 265,
                    "end": 274
                  }
                ],
                "start": 263,
                "end": 276
              },
              "expression": false,
              "start": 258,
              "end": 276
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 247,
            "end": 276
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "statVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 296
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 299,
              "end": 300
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 282,
            "end": 301
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 315
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 315,
              "end": 318
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 304,
            "end": 318
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 331
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 334
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 347,
                        "end": 353
                      },
                      "start": 346,
                      "end": 353
                    },
                    "start": 344,
                    "end": 353
                  },
                  "readonly": false,
                  "static": false,
                  "start": 336,
                  "end": 353
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": true,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 364
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 365,
                      "end": 366
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 362,
                    "end": 366
                  },
                  "readonly": false,
                  "static": false,
                  "start": 355,
                  "end": 366
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 378,
                        "end": 383
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 385
                        }
                      ],
                      "optional": false,
                      "start": 378,
                      "end": 386
                    },
                    "directive": null,
                    "start": 378,
                    "end": 387
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 390,
                          "end": 394
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 396
                        },
                        "optional": false,
                        "computed": false,
                        "start": 390,
                        "end": 396
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "start": 390,
                      "end": 400
                    },
                    "directive": null,
                    "start": 390,
                    "end": 401
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "gar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 418
                        },
                        "optional": false,
                        "computed": false,
                        "start": 410,
                        "end": 418
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 421,
                        "end": 422
                      },
                      "start": 410,
                      "end": 422
                    },
                    "directive": null,
                    "start": 410,
                    "end": 423
                  }
                ],
                "start": 368,
                "end": 427
              },
              "expression": false,
              "start": 331,
              "end": 427
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 320,
            "end": 427
          }
        ],
        "start": 152,
        "end": 429
      },
      "abstract": false,
      "declare": false,
      "start": 129,
      "end": 429
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 436
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 446
            },
            "typeArguments": null,
            "arguments": [],
            "start": 439,
            "end": 448
          },
          "definite": false,
          "start": 435,
          "end": 448
        }
      ],
      "declare": false,
      "start": 431,
      "end": 449
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientMod",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 479
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Provide",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 503
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 508,
                      "end": 511
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 512,
                        "end": 518
                      },
                      "start": 511,
                      "end": 518
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 508,
                    "end": 519
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "zoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 522,
                      "end": 525
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 526,
                        "end": 532
                      },
                      "start": 525,
                      "end": 532
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 522,
                    "end": 533
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 537,
                      "end": 548
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 548,
                      "end": 551
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 537,
                    "end": 551
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "boo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 565,
                      "end": 568
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 568,
                      "end": 571
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 557,
                    "end": 571
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 574,
                      "end": 577
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 577,
                      "end": 580
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 574,
                    "end": 580
                  }
                ],
                "start": 504,
                "end": 583
              },
              "abstract": false,
              "declare": false,
              "start": 490,
              "end": 583
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 483,
            "end": 583
          }
        ],
        "start": 480,
        "end": 585
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 451,
      "end": 585
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1380
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
    "value": "Bar",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 16,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "goo",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 40,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "return",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 87,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
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
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 135,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "gar",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "zoo",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "String",
    "value": "\"zoo\"",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 217,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 231,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 247,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 255,
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
    "value": "x",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 265,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 282,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "statVal",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 304,
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
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 320,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 336,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 355,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "gar",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 435,
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
    "value": "new",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 451,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 459,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "AmbientMod",
    "start": 469,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 483,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 490,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "Provide",
    "start": 496,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 512,
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
    "value": "zoo",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 526,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 537,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 557,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "boo",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  }
]
```
