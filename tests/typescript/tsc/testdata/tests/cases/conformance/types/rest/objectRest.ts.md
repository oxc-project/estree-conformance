__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 13,
                  "end": 14
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 14
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 19,
                  "end": 23
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 23
              }
            ],
            "start": 8,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clone",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 40
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 32,
                "end": 40
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 42
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "definite": false,
          "start": 30,
          "end": 46
        }
      ],
      "declare": false,
      "start": 26,
      "end": 47
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 54,
                  "end": 55
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 54,
                "end": 55
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "justB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 65
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 57,
                "end": 65
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 67
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 71
          },
          "definite": false,
          "start": 52,
          "end": 71
        }
      ],
      "declare": false,
      "start": 48,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 79,
                  "end": 80
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 80
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 79,
                "end": 80
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 83
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renamed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 92
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 82,
                "end": 92
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "empty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 102
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 94,
                "end": 102
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 104
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "definite": false,
          "start": 77,
          "end": 108
        }
      ],
      "declare": false,
      "start": 73,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 117,
                  "end": 120
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renamed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 130
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 116,
                "end": 130
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "justA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 140
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 132,
                "end": 140
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 142
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          "definite": false,
          "start": 114,
          "end": 146
        }
      ],
      "declare": false,
      "start": 110,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 154,
                  "end": 157
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renamed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 154,
                "end": 166
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "justA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 176
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 168,
                "end": 176
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 178
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "definite": false,
          "start": 152,
          "end": 182
        }
      ],
      "declare": false,
      "start": 148,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "'0'",
                        "start": 195,
                        "end": 198
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 201
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 195,
                      "end": 201
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 203,
                        "end": 206
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oooo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 208,
                        "end": 212
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 203,
                      "end": 212
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 214
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 190,
                "end": 214
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "justA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 224
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 216,
                "end": 224
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 226
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "definite": false,
          "start": 188,
          "end": 230
        }
      ],
      "declare": false,
      "start": 184,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 239
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "value": {
                  "type": "Literal",
                  "value": "terrible idea?",
                  "raw": "'terrible idea?'",
                  "start": 247,
                  "end": 263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 244,
                "end": 263
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 266
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 268,
                  "end": 273
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 265,
                "end": 273
              }
            ],
            "start": 242,
            "end": 275
          },
          "definite": false,
          "start": 237,
          "end": 275
        }
      ],
      "declare": false,
      "start": 233,
      "end": 276
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 284
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renamed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 293
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 283,
                "end": 293
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 295,
                "end": 299
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 301
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 306
          },
          "definite": false,
          "start": 281,
          "end": 306
        }
      ],
      "declare": false,
      "start": 277,
      "end": 307
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedrest",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 336
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 338,
                        "end": 344
                      },
                      "start": 336,
                      "end": 344
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 335,
                    "end": 345
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 348
                    },
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 352,
                              "end": 353
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 355,
                                "end": 361
                              },
                              "start": 353,
                              "end": 361
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 352,
                            "end": 362
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 363,
                              "end": 365
                            },
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
                                      "name": "z",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 369,
                                      "end": 370
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 372,
                                        "end": 378
                                      },
                                      "start": 370,
                                      "end": 378
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 369,
                                    "end": 379
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "n3",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 380,
                                      "end": 382
                                    },
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
                                              "name": "n4",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 386,
                                              "end": 388
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 390,
                                                "end": 396
                                              },
                                              "start": 388,
                                              "end": 396
                                            },
                                            "accessibility": null,
                                            "static": false,
                                            "start": 386,
                                            "end": 396
                                          }
                                        ],
                                        "start": 384,
                                        "end": 398
                                      },
                                      "start": 382,
                                      "end": 398
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 380,
                                    "end": 398
                                  }
                                ],
                                "start": 367,
                                "end": 400
                              },
                              "start": 365,
                              "end": 400
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 363,
                            "end": 400
                          }
                        ],
                        "start": 350,
                        "end": 402
                      },
                      "start": 348,
                      "end": 402
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 346,
                    "end": 403
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 408
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 410,
                        "end": 416
                      },
                      "start": 408,
                      "end": 416
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 404,
                    "end": 417
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "restrest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 418,
                      "end": 426
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 428,
                        "end": 434
                      },
                      "start": 426,
                      "end": 434
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 418,
                    "end": 434
                  }
                ],
                "start": 333,
                "end": 436
              },
              "start": 331,
              "end": 436
            },
            "start": 321,
            "end": 436
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 436
        }
      ],
      "declare": true,
      "start": 309,
      "end": 437
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 445
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 445
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 444,
                "end": 445
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 449
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 454
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 454
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 453,
                      "end": 454
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 458
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 462,
                              "end": 463
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 462,
                              "end": 463
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 462,
                            "end": 463
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 465,
                              "end": 467
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "nr",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 474,
                                    "end": 476
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 471,
                                  "end": 476
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 469,
                              "end": 478
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 465,
                            "end": 478
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 460,
                        "end": 480
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 456,
                      "end": 480
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 482
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 447,
                "end": 482
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restrest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 495
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 484,
                "end": 495
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 497
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedrest",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 510
          },
          "definite": false,
          "start": 442,
          "end": 510
        }
      ],
      "declare": false,
      "start": 438,
      "end": 511
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "complex",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 537
                    },
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
                              "name": "ka",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 541,
                              "end": 543
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 541,
                            "end": 544
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ki",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 545,
                              "end": 547
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 545,
                            "end": 547
                          }
                        ],
                        "start": 539,
                        "end": 549
                      },
                      "start": 537,
                      "end": 549
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 536,
                    "end": 550
                  },
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
                      "start": 551,
                      "end": 552
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 551,
                    "end": 560
                  }
                ],
                "start": 534,
                "end": 562
              },
              "start": 532,
              "end": 562
            },
            "start": 525,
            "end": 562
          },
          "init": null,
          "definite": false,
          "start": 525,
          "end": 562
        }
      ],
      "declare": true,
      "start": 513,
      "end": 563
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 571
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 577
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 577
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 575,
                      "end": 577
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 588
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 579,
                      "end": 588
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 590
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 570,
                "end": 590
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 593
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 600
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 592,
                "end": 600
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 605,
                  "end": 609
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 602,
                "end": 609
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 611
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "complex",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 621
          },
          "definite": false,
          "start": 568,
          "end": 621
        }
      ],
      "declare": false,
      "start": 564,
      "end": 622
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 626
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ka",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 632
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ka",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 632
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 630,
                    "end": 632
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 643
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 634,
                    "end": 643
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 645
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 625,
              "end": 645
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 650,
                "end": 655
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 647,
              "end": 655
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 664
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 657,
              "end": 664
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 665
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "complex",
          "optional": false,
          "typeAnnotation": null,
          "start": 668,
          "end": 675
        },
        "start": 624,
        "end": 675
      },
      "directive": null,
      "start": 623,
      "end": 677
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 685
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 685
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 684,
                "end": 685
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fresh",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 695
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 687,
                "end": 695
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 682,
            "end": 697
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 703
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 705,
                  "end": 706
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 702,
                "end": 706
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 709
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 711,
                  "end": 712
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 708,
                "end": 712
              }
            ],
            "start": 700,
            "end": 714
          },
          "definite": false,
          "start": 682,
          "end": 714
        }
      ],
      "declare": false,
      "start": 678,
      "end": 715
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 719,
              "end": 720
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "fresh",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 730
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 722,
              "end": 730
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 717,
          "end": 732
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 737,
                "end": 738
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 740,
                "end": 741
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 737,
              "end": 741
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 744
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 746,
                "end": 747
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 743,
              "end": 747
            }
          ],
          "start": 735,
          "end": 749
        },
        "start": 717,
        "end": 749
      },
      "directive": null,
      "start": 716,
      "end": 751
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Removable",
        "optional": false,
        "typeAnnotation": null,
        "start": 759,
        "end": 768
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 787,
                "end": 793
              },
              "start": 785,
              "end": 793
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private",
            "start": 775,
            "end": 794
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 810
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 813,
                "end": 819
              },
              "start": 811,
              "end": 819
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "protected",
            "start": 799,
            "end": 820
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 830
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 838,
                      "end": 844
                    },
                    "start": 836,
                    "end": 844
                  },
                  "start": 831,
                  "end": 844
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 846,
                "end": 849
              },
              "expression": false,
              "start": 830,
              "end": 849
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 825,
            "end": 849
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "both",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 862
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 866,
                  "end": 872
                },
                "start": 864,
                "end": 872
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 882,
                      "end": 884
                    },
                    "start": 875,
                    "end": 884
                  }
                ],
                "start": 873,
                "end": 886
              },
              "expression": false,
              "start": 862,
              "end": 886
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 854,
            "end": 886
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "both",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 899
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 907,
                      "end": 913
                    },
                    "start": 905,
                    "end": 913
                  },
                  "start": 900,
                  "end": 913
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 915,
                "end": 918
              },
              "expression": false,
              "start": 899,
              "end": 918
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 891,
            "end": 918
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 923,
              "end": 924
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
                "body": [],
                "start": 927,
                "end": 930
              },
              "expression": false,
              "start": 924,
              "end": 930
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 923,
            "end": 930
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removed",
              "optional": false,
              "typeAnnotation": null,
              "start": 935,
              "end": 942
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 945,
                "end": 951
              },
              "start": 943,
              "end": 951
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 935,
            "end": 952
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remainder",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 966
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 969,
                "end": 975
              },
              "start": 967,
              "end": 975
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 957,
            "end": 976
          }
        ],
        "start": 769,
        "end": 978
      },
      "abstract": false,
      "declare": false,
      "start": 753,
      "end": 978
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 989,
        "end": 990
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 998
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1002,
                "end": 1006
              },
              "start": 1000,
              "end": 1006
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 997,
            "end": 1007
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removed",
              "optional": false,
              "typeAnnotation": null,
              "start": 1012,
              "end": 1019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1021,
                "end": 1027
              },
              "start": 1019,
              "end": 1027
            },
            "accessibility": null,
            "static": false,
            "start": 1012,
            "end": 1028
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remainder",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1042
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1044,
                "end": 1050
              },
              "start": 1042,
              "end": 1050
            },
            "accessibility": null,
            "static": false,
            "start": 1033,
            "end": 1051
          }
        ],
        "start": 991,
        "end": 1053
      },
      "declare": false,
      "start": 979,
      "end": 1053
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
            "name": "removable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1058,
            "end": 1067
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Removable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1083
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1070,
            "end": 1085
          },
          "definite": false,
          "start": 1058,
          "end": 1085
        }
      ],
      "declare": false,
      "start": 1054,
      "end": 1086
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "removed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1093,
                  "end": 1100
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "removed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1093,
                  "end": 1100
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1093,
                "end": 1100
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "removableRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1105,
                  "end": 1118
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1102,
                "end": 1118
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1091,
            "end": 1120
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "removable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1123,
            "end": 1132
          },
          "definite": false,
          "start": 1091,
          "end": 1132
        }
      ],
      "declare": false,
      "start": 1087,
      "end": 1133
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1141,
                  "end": 1142
                },
                "typeArguments": null,
                "start": 1141,
                "end": 1142
              },
              "start": 1139,
              "end": 1142
            },
            "start": 1138,
            "end": 1142
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "removable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1145,
            "end": 1154
          },
          "definite": false,
          "start": 1138,
          "end": 1154
        }
      ],
      "declare": false,
      "start": 1134,
      "end": 1155
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "removed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1162,
                  "end": 1169
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "removed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1162,
                  "end": 1169
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 1162,
                "end": 1169
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "removableRest2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1174,
                  "end": 1188
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1171,
                "end": 1188
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1160,
            "end": 1190
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1194
          },
          "definite": false,
          "start": 1160,
          "end": 1194
        }
      ],
      "declare": false,
      "start": 1156,
      "end": 1195
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "computed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1209
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 1212,
            "end": 1215
          },
          "definite": false,
          "start": 1201,
          "end": 1215
        }
      ],
      "declare": false,
      "start": 1197,
      "end": 1216
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "computed2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1221,
            "end": 1230
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 1233,
            "end": 1236
          },
          "definite": false,
          "start": 1221,
          "end": 1236
        }
      ],
      "declare": false,
      "start": 1217,
      "end": 1237
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1253
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stillNotGreat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1256,
                  "end": 1269
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1244,
                "end": 1269
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1272,
                  "end": 1281
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "soSo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1284,
                  "end": 1288
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1271,
                "end": 1288
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1295
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 1291,
                "end": 1295
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1242,
            "end": 1297
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1300,
            "end": 1301
          },
          "definite": false,
          "start": 1242,
          "end": 1301
        }
      ],
      "declare": false,
      "start": 1238,
      "end": 1302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1307,
                "end": 1315
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "stillNotGreat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1318,
                "end": 1331
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 1306,
              "end": 1331
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "computed2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1334,
                "end": 1343
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "soSo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1346,
                "end": 1350
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 1333,
              "end": 1350
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1356
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 1352,
              "end": 1356
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1304,
          "end": 1358
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1361,
          "end": 1362
        },
        "start": 1304,
        "end": 1362
      },
      "directive": null,
      "start": 1303,
      "end": 1364
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
            "name": "noContextualType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1370,
            "end": 1386
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                      "name": "aNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1392,
                      "end": 1399
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1392,
                        "end": 1399
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 1402,
                        "end": 1404
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1392,
                      "end": 1404
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1392,
                    "end": 1404
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notEmptyObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1409,
                      "end": 1423
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 1406,
                    "end": 1423
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1390,
                "end": 1425
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "aNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1437
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "notEmptyObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1440,
                  "end": 1454
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anythingGoes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1455,
                  "end": 1467
                },
                "optional": false,
                "computed": false,
                "start": 1440,
                "end": 1467
              },
              "start": 1430,
              "end": 1467
            },
            "id": null,
            "generator": false,
            "start": 1389,
            "end": 1467
          },
          "definite": false,
          "start": 1370,
          "end": 1467
        }
      ],
      "declare": false,
      "start": 1366,
      "end": 1468
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1468
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 35,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "justB",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "renamed",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "empty",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "renamed",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "justA",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "var",
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
    "type": "String",
    "value": "'b'",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "renamed",
    "start": 159,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "justA",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "oooo",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "justA",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "String",
    "value": "'terrible idea?'",
    "start": 247,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 268,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "renamed",
    "start": 286,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 309,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "nestedrest",
    "start": 321,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "n4",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "restrest",
    "start": 418,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "z",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "nr",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "restrest",
    "start": 487,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "nestedrest",
    "start": 500,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 513,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 521,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "complex",
    "start": 525,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "ki",
    "start": 545,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 554,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 595,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 602,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 605,
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
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "complex",
    "start": 614,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 650,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 657,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "complex",
    "start": 668,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 678,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 687,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "fresh",
    "start": 690,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "fresh",
    "start": 725,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 753,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "Removable",
    "start": 759,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 775,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 787,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 799,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 825,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 831,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 866,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 875,
    "end": 881
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 891,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 895,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 900,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 907,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "removed",
    "start": 935,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "remainder",
    "start": 957,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 979,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "removed",
    "start": 1012,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "remainder",
    "start": 1033,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "removable",
    "start": 1058,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "Removable",
    "start": 1074,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1087,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "removed",
    "start": 1093,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "removableRest",
    "start": 1105,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "removable",
    "start": 1123,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "removable",
    "start": 1145,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "removed",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1171,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "removableRest2",
    "start": 1174,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1197,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 1201,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "computed2",
    "start": 1221,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1238,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 1245,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "stillNotGreat",
    "start": 1256,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "computed2",
    "start": 1272,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "soSo",
    "start": 1284,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 1307,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "stillNotGreat",
    "start": 1318,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "computed2",
    "start": 1334,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "soSo",
    "start": 1346,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1366,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "noContextualType",
    "start": 1370,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "aNumber",
    "start": 1392,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1402,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "notEmptyObject",
    "start": 1409,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1427,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "aNumber",
    "start": 1430,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "notEmptyObject",
    "start": 1440,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "anythingGoes",
    "start": 1455,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  }
]
```
