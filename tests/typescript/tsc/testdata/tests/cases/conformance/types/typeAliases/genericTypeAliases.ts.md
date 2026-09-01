__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tree",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "typeArguments": null,
            "start": 15,
            "end": 16
          },
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
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 25
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 31
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
                            "start": 32,
                            "end": 33
                          },
                          "typeArguments": null,
                          "start": 32,
                          "end": 33
                        }
                      ],
                      "start": 31,
                      "end": 34
                    },
                    "start": 27,
                    "end": 34
                  },
                  "start": 25,
                  "end": 34
                },
                "accessibility": null,
                "static": false,
                "start": 21,
                "end": 35
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 41
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 47
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
                            "start": 48,
                            "end": 49
                          },
                          "typeArguments": null,
                          "start": 48,
                          "end": 49
                        }
                      ],
                      "start": 47,
                      "end": 50
                    },
                    "start": 43,
                    "end": 50
                  },
                  "start": 41,
                  "end": 50
                },
                "accessibility": null,
                "static": false,
                "start": 36,
                "end": 50
              }
            ],
            "start": 19,
            "end": 52
          }
        ],
        "start": 15,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
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
            "name": "tree",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 69
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 70,
                      "end": 76
                    }
                  ],
                  "start": 69,
                  "end": 77
                },
                "start": 65,
                "end": 77
              },
              "start": 63,
              "end": 77
            },
            "start": 59,
            "end": 77
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
                  "name": "left",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 90
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
                        "name": "left",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 106
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 108,
                        "end": 109
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 102,
                      "end": 109
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "right",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 124
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
                              "name": "left",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 140,
                              "end": 144
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 146,
                              "end": 147
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 140,
                            "end": 147
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "right",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 161,
                              "end": 166
                            },
                            "value": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 168,
                              "end": 169
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 161,
                            "end": 169
                          }
                        ],
                        "start": 126,
                        "end": 179
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 119,
                      "end": 179
                    }
                  ],
                  "start": 92,
                  "end": 186
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 86,
                "end": 186
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 197
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 199,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 192,
                "end": 200
              }
            ],
            "start": 80,
            "end": 202
          },
          "definite": false,
          "start": 59,
          "end": 202
        }
      ],
      "declare": false,
      "start": 55,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lazy",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 214
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
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 216
          }
        ],
        "start": 214,
        "end": 217
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "typeArguments": null,
            "start": 220,
            "end": 221
          },
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
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
                  "start": 231,
                  "end": 232
                },
                "typeArguments": null,
                "start": 231,
                "end": 232
              },
              "start": 228,
              "end": 232
            },
            "start": 225,
            "end": 232
          }
        ],
        "start": 220,
        "end": 233
      },
      "declare": false,
      "start": 205,
      "end": 234
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
            "name": "ls",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lazy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 248
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 249,
                      "end": 255
                    }
                  ],
                  "start": 248,
                  "end": 256
                },
                "start": 244,
                "end": 256
              },
              "start": 242,
              "end": 256
            },
            "start": 240,
            "end": 256
          },
          "init": null,
          "definite": false,
          "start": 240,
          "end": 256
        }
      ],
      "declare": false,
      "start": 236,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ls",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 260
        },
        "right": {
          "type": "Literal",
          "value": "eager",
          "raw": "\"eager\"",
          "start": 263,
          "end": 270
        },
        "start": 258,
        "end": 270
      },
      "directive": null,
      "start": 258,
      "end": 271
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ls",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 274
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": "lazy",
            "raw": "\"lazy\"",
            "start": 283,
            "end": 289
          },
          "id": null,
          "generator": false,
          "start": 277,
          "end": 289
        },
        "start": 272,
        "end": 289
      },
      "directive": null,
      "start": 272,
      "end": 290
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 300
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
              "start": 301,
              "end": 302
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 302
          }
        ],
        "start": 300,
        "end": 303
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "typeArguments": null,
            "start": 306,
            "end": 307
          },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 318
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
                            "start": 319,
                            "end": 320
                          },
                          "typeArguments": null,
                          "start": 319,
                          "end": 320
                        }
                      ],
                      "start": 318,
                      "end": 321
                    },
                    "start": 315,
                    "end": 321
                  },
                  "start": 313,
                  "end": 321
                },
                "accessibility": null,
                "static": false,
                "start": 312,
                "end": 321
              }
            ],
            "start": 310,
            "end": 323
          }
        ],
        "start": 306,
        "end": 323
      },
      "declare": false,
      "start": 292,
      "end": 324
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 333
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 334,
            "end": 335
          }
        ],
        "start": 333,
        "end": 336
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "typeArguments": null,
            "start": 339,
            "end": 340
          },
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 346
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 348,
                      "end": 351
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 352,
                            "end": 353
                          },
                          "typeArguments": null,
                          "start": 352,
                          "end": 353
                        }
                      ],
                      "start": 351,
                      "end": 354
                    },
                    "start": 348,
                    "end": 354
                  },
                  "start": 346,
                  "end": 354
                },
                "accessibility": null,
                "static": false,
                "start": 345,
                "end": 354
              }
            ],
            "start": 343,
            "end": 356
          }
        ],
        "start": 339,
        "end": 356
      },
      "declare": false,
      "start": 325,
      "end": 357
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 401
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 402,
                      "end": 408
                    }
                  ],
                  "start": 401,
                  "end": 409
                },
                "start": 398,
                "end": 409
              },
              "start": 396,
              "end": 409
            },
            "start": 395,
            "end": 409
          },
          "init": null,
          "definite": false,
          "start": 395,
          "end": 409
        }
      ],
      "declare": false,
      "start": 391,
      "end": 410
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 421
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 422,
                      "end": 428
                    }
                  ],
                  "start": 421,
                  "end": 429
                },
                "start": 418,
                "end": 429
              },
              "start": 416,
              "end": 429
            },
            "start": 415,
            "end": 429
          },
          "init": null,
          "definite": false,
          "start": 415,
          "end": 429
        }
      ],
      "declare": false,
      "start": 411,
      "end": 430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 432
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 436
        },
        "start": 431,
        "end": 436
      },
      "directive": null,
      "start": 431,
      "end": 437
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 439
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 443
        },
        "start": 438,
        "end": 443
      },
      "directive": null,
      "start": 438,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 447
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 450,
          "end": 458
        },
        "start": 446,
        "end": 458
      },
      "directive": null,
      "start": 446,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 461
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
                "start": 466,
                "end": 467
              },
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 469,
                "end": 476
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 466,
              "end": 476
            }
          ],
          "start": 464,
          "end": 478
        },
        "start": 460,
        "end": 478
      },
      "directive": null,
      "start": 460,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 480,
          "end": 481
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
                "start": 486,
                "end": 487
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 492
                    },
                    "value": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 494,
                      "end": 501
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 491,
                    "end": 501
                  }
                ],
                "start": 489,
                "end": 503
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 486,
              "end": 503
            }
          ],
          "start": 484,
          "end": 505
        },
        "start": 480,
        "end": 505
      },
      "directive": null,
      "start": 480,
      "end": 506
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 518
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 519,
                      "end": 525
                    }
                  ],
                  "start": 518,
                  "end": 526
                },
                "start": 515,
                "end": 526
              },
              "start": 513,
              "end": 526
            },
            "start": 512,
            "end": 526
          },
          "init": null,
          "definite": false,
          "start": 512,
          "end": 526
        }
      ],
      "declare": false,
      "start": 508,
      "end": 527
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 529
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 532,
          "end": 534
        },
        "start": 528,
        "end": 534
      },
      "directive": null,
      "start": 528,
      "end": 535
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 537
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
                "start": 542,
                "end": 543
              },
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 545,
                "end": 547
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 542,
              "end": 547
            }
          ],
          "start": 540,
          "end": 549
        },
        "start": 536,
        "end": 549
      },
      "directive": null,
      "start": 536,
      "end": 550
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 551,
          "end": 552
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
                "start": 557,
                "end": 558
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 562,
                      "end": 563
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 565,
                      "end": 567
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 562,
                    "end": 567
                  }
                ],
                "start": 560,
                "end": 569
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 557,
              "end": 569
            }
          ],
          "start": 555,
          "end": 571
        },
        "start": 551,
        "end": 571
      },
      "directive": null,
      "start": 551,
      "end": 572
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strange",
        "optional": false,
        "typeAnnotation": null,
        "start": 579,
        "end": 586
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
              "start": 587,
              "end": 588
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 587,
            "end": 588
          }
        ],
        "start": 586,
        "end": 589
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 592,
        "end": 598
      },
      "declare": false,
      "start": 574,
      "end": 599
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Strange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 642
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 643,
                      "end": 649
                    }
                  ],
                  "start": 642,
                  "end": 650
                },
                "start": 635,
                "end": 650
              },
              "start": 633,
              "end": 650
            },
            "start": 632,
            "end": 650
          },
          "init": null,
          "definite": false,
          "start": 632,
          "end": 650
        }
      ],
      "declare": false,
      "start": 628,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 653
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 656,
          "end": 663
        },
        "start": 652,
        "end": 663
      },
      "directive": null,
      "start": 652,
      "end": 664
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 678
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 679,
              "end": 680
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 679,
            "end": 680
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 682,
            "end": 683
          }
        ],
        "start": 678,
        "end": 684
      },
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 692
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 695
                },
                "typeArguments": null,
                "start": 694,
                "end": 695
              },
              "start": 692,
              "end": 695
            },
            "accessibility": null,
            "static": false,
            "start": 691,
            "end": 696
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 702
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 704,
                  "end": 705
                },
                "typeArguments": null,
                "start": 704,
                "end": 705
              },
              "start": 702,
              "end": 705
            },
            "accessibility": null,
            "static": false,
            "start": 701,
            "end": 706
          }
        ],
        "start": 685,
        "end": 708
      },
      "declare": false,
      "start": 666,
      "end": 708
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pair",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 719
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
              "start": 720,
              "end": 721
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 720,
            "end": 721
          }
        ],
        "start": 719,
        "end": 722
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AB",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 727
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
                "start": 728,
                "end": 729
              },
              "typeArguments": null,
              "start": 728,
              "end": 729
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 732
              },
              "typeArguments": null,
              "start": 731,
              "end": 732
            }
          ],
          "start": 727,
          "end": 733
        },
        "start": 725,
        "end": 733
      },
      "declare": false,
      "start": 710,
      "end": 734
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedPair",
        "optional": false,
        "typeAnnotation": null,
        "start": 746,
        "end": 756
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
              "start": 757,
              "end": 758
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 757,
            "end": 758
          }
        ],
        "start": 756,
        "end": 759
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pair",
            "optional": false,
            "typeAnnotation": null,
            "start": 768,
            "end": 772
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
                  "start": 773,
                  "end": 774
                },
                "typeArguments": null,
                "start": 773,
                "end": 774
              }
            ],
            "start": 772,
            "end": 775
          },
          "start": 768,
          "end": 775
        }
      ],
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 785
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 787,
                "end": 793
              },
              "start": 785,
              "end": 793
            },
            "accessibility": null,
            "static": false,
            "start": 782,
            "end": 794
          }
        ],
        "start": 776,
        "end": 796
      },
      "declare": false,
      "start": 736,
      "end": 796
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TaggedPair",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 815
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 816,
                      "end": 822
                    }
                  ],
                  "start": 815,
                  "end": 823
                },
                "start": 805,
                "end": 823
              },
              "start": 803,
              "end": 823
            },
            "start": 802,
            "end": 823
          },
          "init": null,
          "definite": false,
          "start": 802,
          "end": 823
        }
      ],
      "declare": false,
      "start": 798,
      "end": 824
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 826
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 827,
            "end": 828
          },
          "optional": false,
          "computed": false,
          "start": 825,
          "end": 828
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 831,
          "end": 832
        },
        "start": 825,
        "end": 832
      },
      "directive": null,
      "start": 825,
      "end": 833
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 834,
            "end": 835
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 837
          },
          "optional": false,
          "computed": false,
          "start": 834,
          "end": 837
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 840,
          "end": 841
        },
        "start": 834,
        "end": 841
      },
      "directive": null,
      "start": 834,
      "end": 842
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 844
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 848
          },
          "optional": false,
          "computed": false,
          "start": 843,
          "end": 848
        },
        "right": {
          "type": "Literal",
          "value": "test",
          "raw": "\"test\"",
          "start": 851,
          "end": 857
        },
        "start": 843,
        "end": 857
      },
      "directive": null,
      "start": 843,
      "end": 858
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 870
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 871,
              "end": 872
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 871,
            "end": 872
          }
        ],
        "start": 870,
        "end": 873
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 890
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
                    "start": 891,
                    "end": 892
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 891,
                  "end": 892
                }
              ],
              "start": 890,
              "end": 893
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 897
                  },
                  "typeArguments": null,
                  "start": 896,
                  "end": 897
                },
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 903
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 905,
                            "end": 908
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
                                  "start": 909,
                                  "end": 910
                                },
                                "typeArguments": null,
                                "start": 909,
                                "end": 910
                              }
                            ],
                            "start": 908,
                            "end": 911
                          },
                          "start": 905,
                          "end": 911
                        },
                        "start": 903,
                        "end": 911
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 902,
                      "end": 911
                    }
                  ],
                  "start": 900,
                  "end": 913
                }
              ],
              "start": 896,
              "end": 913
            },
            "declare": false,
            "start": 882,
            "end": 914
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 929
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 930,
                                "end": 931
                              },
                              "typeArguments": null,
                              "start": 930,
                              "end": 931
                            },
                            "start": 930,
                            "end": 933
                          }
                        ],
                        "start": 929,
                        "end": 934
                      },
                      "start": 926,
                      "end": 934
                    },
                    "start": 924,
                    "end": 934
                  },
                  "start": 923,
                  "end": 934
                },
                "init": null,
                "definite": false,
                "start": 923,
                "end": 934
              }
            ],
            "declare": false,
            "start": 919,
            "end": 935
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 948
            },
            "start": 940,
            "end": 949
          }
        ],
        "start": 876,
        "end": 951
      },
      "expression": false,
      "start": 860,
      "end": 951
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 963
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
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 964,
              "end": 965
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 964,
            "end": 965
          }
        ],
        "start": 963,
        "end": 966
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 983
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 984,
                    "end": 985
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 984,
                  "end": 985
                }
              ],
              "start": 983,
              "end": 986
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 989,
                    "end": 990
                  },
                  "typeArguments": null,
                  "start": 989,
                  "end": 990
                },
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 995,
                        "end": 996
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 998,
                            "end": 1001
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1002,
                                  "end": 1003
                                },
                                "typeArguments": null,
                                "start": 1002,
                                "end": 1003
                              }
                            ],
                            "start": 1001,
                            "end": 1004
                          },
                          "start": 998,
                          "end": 1004
                        },
                        "start": 996,
                        "end": 1004
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 995,
                      "end": 1004
                    }
                  ],
                  "start": 993,
                  "end": 1006
                }
              ],
              "start": 989,
              "end": 1006
            },
            "declare": false,
            "start": 975,
            "end": 1007
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1019,
                        "end": 1022
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1023,
                                "end": 1024
                              },
                              "typeArguments": null,
                              "start": 1023,
                              "end": 1024
                            },
                            "start": 1023,
                            "end": 1026
                          }
                        ],
                        "start": 1022,
                        "end": 1027
                      },
                      "start": 1019,
                      "end": 1027
                    },
                    "start": 1017,
                    "end": 1027
                  },
                  "start": 1016,
                  "end": 1027
                },
                "init": null,
                "definite": false,
                "start": 1016,
                "end": 1027
              }
            ],
            "declare": false,
            "start": 1012,
            "end": 1028
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1040,
              "end": 1041
            },
            "start": 1033,
            "end": 1042
          }
        ],
        "start": 969,
        "end": 1044
      },
      "expression": false,
      "start": 953,
      "end": 1044
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1082,
            "end": 1083
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1087
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1088,
                  "end": 1094
                }
              ],
              "start": 1087,
              "end": 1095
            },
            "arguments": [],
            "optional": false,
            "start": 1086,
            "end": 1097
          },
          "definite": false,
          "start": 1082,
          "end": 1097
        }
      ],
      "declare": false,
      "start": 1078,
      "end": 1098
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1103,
            "end": 1104
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1108
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 1109,
                  "end": 1115
                }
              ],
              "start": 1108,
              "end": 1116
            },
            "arguments": [],
            "optional": false,
            "start": 1107,
            "end": 1118
          },
          "definite": false,
          "start": 1103,
          "end": 1118
        }
      ],
      "declare": false,
      "start": 1099,
      "end": 1119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1120,
          "end": 1121
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1124,
          "end": 1125
        },
        "start": 1120,
        "end": 1125
      },
      "directive": null,
      "start": 1120,
      "end": 1126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1126
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "tree",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "left",
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
    "type": "Numeric",
    "value": "0",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "left",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 161,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 205,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Lazy",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 228,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "ls",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "Lazy",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 249,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "ls",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"eager\"",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "ls",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 280,
    "end": 282
  },
  {
    "type": "String",
    "value": "\"lazy\"",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 292,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 325,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "Bar",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 391,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "y",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 450,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 469,
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
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "x",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "42",
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
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "42",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 574,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "Strange",
    "start": 579,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 592,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 628,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "Strange",
    "start": 635,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 656,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 666,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 710,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 736,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "TaggedPair",
    "start": 746,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 760,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 782,
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
    "value": "string",
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
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 798,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "TaggedPair",
    "start": 805,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 816,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 860,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 882,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 905,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 919,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 940,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 953,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 975,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  }
]
```
