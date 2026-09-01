__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
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
                    "start": 21,
                    "end": 22
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 24,
                    "end": 25
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 21,
                  "end": 25
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
                    "start": 31,
                    "end": 32
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 34,
                    "end": 36
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 31,
                  "end": 36
                }
              ],
              "start": 15,
              "end": 38
            },
            "definite": false,
            "start": 11,
            "end": 38
          }
        ],
        "declare": false,
        "start": 7,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 38
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oBad",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 55
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
                    "start": 64,
                    "end": 65
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 71
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 78
                      },
                      "optional": false,
                      "computed": false,
                      "start": 67,
                      "end": 78
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 67,
                    "end": 80
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 64,
                  "end": 80
                }
              ],
              "start": 58,
              "end": 83
            },
            "definite": false,
            "start": 51,
            "end": 83
          }
        ],
        "declare": false,
        "start": 47,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 83
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 101,
              "end": 102
            },
            "definite": false,
            "start": 97,
            "end": 102
          }
        ],
        "declare": false,
        "start": 91,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 84,
      "end": 103
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oBad2",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 120
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
                    "start": 129,
                    "end": 130
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 143
                        },
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Math",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 149
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "random",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 150,
                              "end": 156
                            },
                            "optional": false,
                            "computed": false,
                            "start": 145,
                            "end": 156
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 145,
                          "end": 158
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 142,
                        "end": 158
                      }
                    ],
                    "start": 132,
                    "end": 165
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 129,
                  "end": 165
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 172
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 185
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 187,
                          "end": 188
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 184,
                        "end": 188
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 199
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
                          "end": 202
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 198,
                        "end": 202
                      }
                    ],
                    "start": 174,
                    "end": 209
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 171,
                  "end": 209
                }
              ],
              "start": 123,
              "end": 211
            },
            "definite": false,
            "start": 115,
            "end": 211
          }
        ],
        "declare": false,
        "start": 111,
        "end": 211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithMethods",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 236
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
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 251
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
                      "start": 254,
                      "end": 257
                    },
                    "expression": false,
                    "start": 251,
                    "end": 257
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 245,
                  "end": 257
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "okMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 271
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
                        "type": "TSVoidKeyword",
                        "start": 275,
                        "end": 279
                      },
                      "start": 273,
                      "end": 279
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 280,
                      "end": 283
                    },
                    "expression": false,
                    "start": 271,
                    "end": 283
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 263,
                  "end": 283
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 290
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 292,
                    "end": 293
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 289,
                  "end": 293
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bad",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 302
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
                      "start": 305,
                      "end": 308
                    },
                    "expression": false,
                    "start": 302,
                    "end": 308
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 299,
                  "end": 308
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 318
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 314,
                  "end": 318
                }
              ],
              "start": 239,
              "end": 321
            },
            "definite": false,
            "start": 224,
            "end": 321
          }
        ],
        "declare": false,
        "start": 220,
        "end": 321
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 213,
      "end": 321
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithMethodsNested",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 351
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 360,
                    "end": 363
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
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 375,
                          "end": 381
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
                            "start": 384,
                            "end": 387
                          },
                          "expression": false,
                          "start": 381,
                          "end": 387
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 375,
                        "end": 387
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 398
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 400,
                          "end": 401
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 397,
                        "end": 401
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "okMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 419
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
                              "type": "TSVoidKeyword",
                              "start": 423,
                              "end": 427
                            },
                            "start": 421,
                            "end": 427
                          },
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 428,
                            "end": 431
                          },
                          "expression": false,
                          "start": 419,
                          "end": 431
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 411,
                        "end": 431
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bad",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 444
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
                            "start": 447,
                            "end": 450
                          },
                          "expression": false,
                          "start": 444,
                          "end": 450
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 441,
                        "end": 450
                      }
                    ],
                    "start": 365,
                    "end": 456
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 360,
                  "end": 456
                }
              ],
              "start": 354,
              "end": 458
            },
            "definite": false,
            "start": 333,
            "end": 458
          }
        ],
        "declare": false,
        "start": 329,
        "end": 458
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 322,
      "end": 458
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithAccessor",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 486
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "singleGetterBad",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 514
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
                            "start": 526,
                            "end": 527
                          },
                          "start": 519,
                          "end": 527
                        }
                      ],
                      "start": 517,
                      "end": 529
                    },
                    "expression": false,
                    "start": 514,
                    "end": 529
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 495,
                  "end": 529
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "singleSetterBad",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 539,
                    "end": 554
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
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 560
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 562,
                      "end": 565
                    },
                    "expression": false,
                    "start": 554,
                    "end": 565
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 535,
                  "end": 565
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetBad",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 576,
                    "end": 585
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
                            "start": 597,
                            "end": 598
                          },
                          "start": 590,
                          "end": 598
                        }
                      ],
                      "start": 588,
                      "end": 600
                    },
                    "expression": false,
                    "start": 585,
                    "end": 600
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 572,
                  "end": 600
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetBad",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 619
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
                        "typeAnnotation": null,
                        "start": 620,
                        "end": 625
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 627,
                      "end": 630
                    },
                    "expression": false,
                    "start": 619,
                    "end": 630
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 606,
                  "end": 630
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 649
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
                        "start": 653,
                        "end": 659
                      },
                      "start": 651,
                      "end": 659
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 669,
                            "end": 670
                          },
                          "start": 662,
                          "end": 670
                        }
                      ],
                      "start": 660,
                      "end": 672
                    },
                    "expression": false,
                    "start": 649,
                    "end": 672
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 637,
                  "end": 672
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 682,
                    "end": 690
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
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 696
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 698,
                      "end": 701
                    },
                    "expression": false,
                    "start": 690,
                    "end": 701
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 678,
                  "end": 701
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 712,
                    "end": 721
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
                            "start": 733,
                            "end": 734
                          },
                          "start": 726,
                          "end": 734
                        }
                      ],
                      "start": 724,
                      "end": 736
                    },
                    "expression": false,
                    "start": 721,
                    "end": 736
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 708,
                  "end": 736
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 746,
                    "end": 755
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
                            "start": 763,
                            "end": 769
                          },
                          "start": 761,
                          "end": 769
                        },
                        "start": 756,
                        "end": 769
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 771,
                      "end": 774
                    },
                    "expression": false,
                    "start": 755,
                    "end": 774
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 742,
                  "end": 774
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 789,
                    "end": 798
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
                        "start": 802,
                        "end": 808
                      },
                      "start": 800,
                      "end": 808
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 818,
                            "end": 819
                          },
                          "start": 811,
                          "end": 819
                        }
                      ],
                      "start": 809,
                      "end": 821
                    },
                    "expression": false,
                    "start": 798,
                    "end": 821
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 785,
                  "end": 821
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSetOk3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 831,
                    "end": 840
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
                            "start": 848,
                            "end": 854
                          },
                          "start": 846,
                          "end": 854
                        },
                        "start": 841,
                        "end": 854
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 856,
                      "end": 859
                    },
                    "expression": false,
                    "start": 840,
                    "end": 859
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 827,
                  "end": 859
                }
              ],
              "start": 489,
              "end": 862
            },
            "definite": false,
            "start": 473,
            "end": 862
          }
        ],
        "declare": false,
        "start": 469,
        "end": 862
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 462,
      "end": 862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 877
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 879
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 878,
            "end": 879
          }
        ],
        "start": 877,
        "end": 880
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
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
                "start": 884,
                "end": 885
              },
              "typeArguments": null,
              "start": 884,
              "end": 885
            },
            "start": 882,
            "end": 885
          },
          "start": 881,
          "end": 885
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 888,
            "end": 889
          },
          "typeArguments": null,
          "start": 888,
          "end": 889
        },
        "start": 886,
        "end": 889
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 899,
              "end": 900
            },
            "start": 892,
            "end": 900
          }
        ],
        "start": 890,
        "end": 902
      },
      "expression": false,
      "start": 864,
      "end": 902
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 920,
                  "end": 926
                },
                "start": 913,
                "end": 926
              },
              "start": 911,
              "end": 926
            },
            "start": 910,
            "end": 926
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 935
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 929,
            "end": 937
          },
          "definite": false,
          "start": 910,
          "end": 937
        }
      ],
      "declare": false,
      "start": 904,
      "end": 938
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 950,
                "end": 956
              },
              "start": 948,
              "end": 956
            },
            "start": 945,
            "end": 956
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 959,
            "end": 961
          },
          "definite": false,
          "start": 945,
          "end": 961
        }
      ],
      "declare": false,
      "start": 939,
      "end": 962
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 968,
        "end": 969
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 977
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 980,
              "end": 982
            },
            "computed": false,
            "start": 976,
            "end": 982
          }
        ],
        "start": 970,
        "end": 985
      },
      "const": false,
      "declare": false,
      "start": 963,
      "end": 985
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithComputedProperties",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1022
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1032,
                    "end": 1033
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1036,
                    "end": 1037
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1031,
                  "end": 1037
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1044,
                      "end": 1045
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1048,
                      "end": 1049
                    },
                    "start": 1044,
                    "end": 1049
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1052,
                    "end": 1053
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1043,
                  "end": 1053
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1060,
                      "end": 1064
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1065,
                        "end": 1066
                      }
                    ],
                    "optional": false,
                    "start": 1060,
                    "end": 1067
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1070,
                    "end": 1071
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1059,
                  "end": 1071
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1078,
                    "end": 1079
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1082,
                    "end": 1083
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1077,
                  "end": 1083
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1090,
                      "end": 1091
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1092,
                      "end": 1093
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1090,
                    "end": 1093
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1096,
                    "end": 1097
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1089,
                  "end": 1097
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1104,
                    "end": 1107
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1110,
                    "end": 1111
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1103,
                  "end": 1111
                }
              ],
              "start": 1025,
              "end": 1114
            },
            "definite": false,
            "start": 999,
            "end": 1114
          }
        ],
        "declare": false,
        "start": 993,
        "end": 1114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 986,
      "end": 1114
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
            "name": "part",
            "optional": false,
            "typeAnnotation": null,
            "start": 1122,
            "end": 1126
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
                  "start": 1131,
                  "end": 1132
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1134,
                  "end": 1135
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1131,
                "end": 1135
              }
            ],
            "start": 1129,
            "end": 1137
          },
          "definite": false,
          "start": 1122,
          "end": 1137
        }
      ],
      "declare": false,
      "start": 1116,
      "end": 1138
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithSpread",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1164
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1173,
                    "end": 1174
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1176,
                    "end": 1177
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1173,
                  "end": 1177
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1186,
                    "end": 1190
                  },
                  "start": 1183,
                  "end": 1190
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1197
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1199,
                    "end": 1200
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1196,
                  "end": 1200
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1206,
                    "end": 1210
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "part",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1206,
                    "end": 1210
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1206,
                  "end": 1210
                }
              ],
              "start": 1167,
              "end": 1213
            },
            "definite": false,
            "start": 1153,
            "end": 1213
          }
        ],
        "declare": false,
        "start": 1147,
        "end": 1213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1140,
      "end": 1213
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oWithSpread2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1229,
              "end": 1241
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1251
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1253,
                    "end": 1254
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1250,
                  "end": 1254
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1260,
                    "end": 1266
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "part",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1281,
                          "end": 1285
                        },
                        "start": 1278,
                        "end": 1285
                      }
                    ],
                    "start": 1268,
                    "end": 1292
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1260,
                  "end": 1292
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1298,
                    "end": 1299
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1301,
                    "end": 1302
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1298,
                  "end": 1302
                }
              ],
              "start": 1244,
              "end": 1305
            },
            "definite": false,
            "start": 1229,
            "end": 1305
          }
        ],
        "declare": false,
        "start": 1223,
        "end": 1305
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1216,
      "end": 1305
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1305
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 40,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "oBad",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
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
    "value": "a",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 72,
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
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 84,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 104,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "oBad2",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 213,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "oWithMethods",
    "start": 224,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
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
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "okMethod",
    "start": 263,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
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
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 322,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "oWithMethodsNested",
    "start": 333,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "okMethod",
    "start": 411,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 462,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 469,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "oWithAccessor",
    "start": 473,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "singleGetterBad",
    "start": 499,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 519,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 535,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "singleSetterBad",
    "start": 539,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "getSetBad",
    "start": 576,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 590,
    "end": 596
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "getSetBad",
    "start": 610,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 637,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "getSetOk",
    "start": 641,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 662,
    "end": 668
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "getSetOk",
    "start": 682,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 691,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 708,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "getSetOk2",
    "start": 712,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 726,
    "end": 732
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "getSetOk2",
    "start": 746,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 756,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 763,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 785,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "getSetOk3",
    "start": 789,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 802,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 811,
    "end": 817
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 827,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "getSetOk3",
    "start": 831,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 848,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 864,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 892,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 904,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 913,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 920,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 939,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 945,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 950,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 959,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 963,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 986,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 993,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "oWithComputedProperties",
    "start": 999,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1116,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1122,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1140,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1147,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "oWithSpread",
    "start": 1153,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1186,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1206,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1223,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "oWithSpread2",
    "start": 1229,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 1260,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1278,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 1281,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1304,
    "end": 1305
  }
]
```
