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
        "name": "Foo",
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              },
              "start": 17,
              "end": 25
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 28,
              "end": 30
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 31
          }
        ],
        "start": 10,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFooOrNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 64
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
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
                "start": 68,
                "end": 71
              },
              "typeArguments": null,
              "start": 68,
              "end": 71
            },
            {
              "type": "TSNullKeyword",
              "start": 74,
              "end": 78
            }
          ],
          "start": 68,
          "end": 78
        },
        "start": 66,
        "end": 78
      },
      "body": null,
      "expression": false,
      "start": 35,
      "end": 79
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getStringOrNumberOrNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 124,
              "end": 130
            },
            {
              "type": "TSNumberKeyword",
              "start": 133,
              "end": 139
            },
            {
              "type": "TSNullKeyword",
              "start": 142,
              "end": 146
            }
          ],
          "start": 124,
          "end": 146
        },
        "start": 122,
        "end": 146
      },
      "body": null,
      "expression": false,
      "start": 80,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                            "start": 178,
                            "end": 181
                          },
                          "typeArguments": null,
                          "start": 178,
                          "end": 181
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 184,
                          "end": 188
                        }
                      ],
                      "start": 178,
                      "end": 188
                    },
                    "start": 176,
                    "end": 188
                  },
                  "start": 173,
                  "end": 188
                },
                "init": null,
                "definite": false,
                "start": 173,
                "end": 188
              }
            ],
            "declare": false,
            "start": 169,
            "end": 189
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 217
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 205,
                  "end": 219
                },
                "start": 199,
                "end": 219
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 225,
                "end": 229
              },
              "start": 198,
              "end": 229
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
                    "start": 241,
                    "end": 244
                  },
                  "directive": null,
                  "start": 241,
                  "end": 245
                }
              ],
              "start": 231,
              "end": 259
            },
            "alternate": null,
            "start": 194,
            "end": 259
          }
        ],
        "start": 163,
        "end": 261
      },
      "expression": false,
      "start": 149,
      "end": 261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 274
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo1",
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
                            "start": 293,
                            "end": 296
                          },
                          "typeArguments": null,
                          "start": 293,
                          "end": 296
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 299,
                          "end": 303
                        }
                      ],
                      "start": 293,
                      "end": 303
                    },
                    "start": 291,
                    "end": 303
                  },
                  "start": 287,
                  "end": 303
                },
                "init": null,
                "definite": false,
                "start": 287,
                "end": 303
              }
            ],
            "declare": false,
            "start": 283,
            "end": 304
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
                  "name": "foo2",
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
                            "start": 319,
                            "end": 322
                          },
                          "typeArguments": null,
                          "start": 319,
                          "end": 322
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 325,
                          "end": 329
                        }
                      ],
                      "start": 319,
                      "end": 329
                    },
                    "start": 317,
                    "end": 329
                  },
                  "start": 313,
                  "end": 329
                },
                "init": null,
                "definite": false,
                "start": 313,
                "end": 329
              }
            ],
            "declare": false,
            "start": 309,
            "end": 330
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 344
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getFooOrNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 359
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 347,
                      "end": 361
                    },
                    "start": 340,
                    "end": 361
                  },
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 363,
                      "end": 367
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 370,
                      "end": 374
                    },
                    "start": 363,
                    "end": 374
                  }
                ],
                "start": 340,
                "end": 374
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 380,
                "end": 384
              },
              "start": 339,
              "end": 384
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 400
                  },
                  "directive": null,
                  "start": 396,
                  "end": 401
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 429
                  },
                  "directive": null,
                  "start": 425,
                  "end": 430
                }
              ],
              "start": 386,
              "end": 444
            },
            "alternate": null,
            "start": 335,
            "end": 444
          }
        ],
        "start": 277,
        "end": 446
      },
      "expression": false,
      "start": 263,
      "end": 446
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 459
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
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
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 483
                          },
                          "typeArguments": null,
                          "start": 477,
                          "end": 483
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 486,
                          "end": 490
                        }
                      ],
                      "start": 477,
                      "end": 490
                    },
                    "start": 475,
                    "end": 490
                  },
                  "start": 472,
                  "end": 490
                },
                "init": null,
                "definite": false,
                "start": 472,
                "end": 490
              }
            ],
            "declare": false,
            "start": 468,
            "end": 491
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 504
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 507,
                    "end": 519
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 507,
                  "end": 521
                },
                "start": 501,
                "end": 521
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 537
              },
              "start": 500,
              "end": 537
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 552
                  },
                  "directive": null,
                  "start": 549,
                  "end": 553
                }
              ],
              "start": 539,
              "end": 559
            },
            "alternate": null,
            "start": 496,
            "end": 559
          }
        ],
        "start": 462,
        "end": 561
      },
      "expression": false,
      "start": 448,
      "end": 561
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 574
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 590,
                          "end": 596
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 599,
                          "end": 605
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 608,
                          "end": 612
                        }
                      ],
                      "start": 590,
                      "end": 612
                    },
                    "start": 588,
                    "end": 612
                  },
                  "start": 587,
                  "end": 612
                },
                "init": null,
                "definite": false,
                "start": 587,
                "end": 612
              }
            ],
            "declare": false,
            "start": 583,
            "end": 613
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 630,
                    "end": 631
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getStringOrNumberOrNull",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 657
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 634,
                    "end": 659
                  },
                  "start": 630,
                  "end": 659
                },
                "prefix": true,
                "start": 622,
                "end": 660
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 665,
                "end": 673
              },
              "start": 622,
              "end": 673
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 685,
                    "end": 686
                  },
                  "directive": null,
                  "start": 685,
                  "end": 687
                }
              ],
              "start": 675,
              "end": 693
            },
            "alternate": null,
            "start": 618,
            "end": 693
          }
        ],
        "start": 577,
        "end": 695
      },
      "expression": false,
      "start": 563,
      "end": 695
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
            "name": "re",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 726
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/./g",
            "regex": {
              "pattern": ".",
              "flags": "g"
            },
            "start": 729,
            "end": 733
          },
          "definite": false,
          "start": 724,
          "end": 733
        }
      ],
      "declare": false,
      "start": 718,
      "end": 733
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
            "name": "match",
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
                      "name": "RegExpExecArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 745,
                      "end": 760
                    },
                    "typeArguments": null,
                    "start": 745,
                    "end": 760
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 763,
                    "end": 767
                  }
                ],
                "start": 745,
                "end": 767
              },
              "start": 743,
              "end": 767
            },
            "start": 738,
            "end": 767
          },
          "init": null,
          "definite": false,
          "start": 738,
          "end": 767
        }
      ],
      "declare": false,
      "start": 734,
      "end": 767
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "match",
            "optional": false,
            "typeAnnotation": null,
            "start": 777,
            "end": 782
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "re",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 787
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exec",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 792
              },
              "optional": false,
              "computed": false,
              "start": 785,
              "end": 792
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "xxx",
                "raw": "\"xxx\"",
                "start": 793,
                "end": 798
              }
            ],
            "optional": false,
            "start": 785,
            "end": 799
          },
          "start": 777,
          "end": 799
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 804,
          "end": 808
        },
        "start": 776,
        "end": 808
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 822,
                  "end": 828
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 831,
                        "end": 836
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 837,
                        "end": 838
                      },
                      "optional": false,
                      "computed": true,
                      "start": 831,
                      "end": 839
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 840,
                      "end": 846
                    },
                    "optional": false,
                    "computed": false,
                    "start": 831,
                    "end": 846
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 854
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 855,
                        "end": 856
                      },
                      "optional": false,
                      "computed": true,
                      "start": 849,
                      "end": 857
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 858,
                      "end": 864
                    },
                    "optional": false,
                    "computed": false,
                    "start": 849,
                    "end": 864
                  },
                  "start": 831,
                  "end": 864
                },
                "definite": false,
                "start": 822,
                "end": 864
              }
            ],
            "declare": false,
            "start": 816,
            "end": 864
          }
        ],
        "start": 810,
        "end": 866
      },
      "start": 769,
      "end": 866
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 866
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
    "value": "Foo",
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
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "string",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 52,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 72,
    "end": 73
  },
  {
    "type": "Null",
    "value": "null",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 80,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumberOrNull",
    "start": 97,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 140,
    "end": 141
  },
  {
    "type": "Null",
    "value": "null",
    "start": 142,
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
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 182,
    "end": 183
  },
  {
    "type": "Null",
    "value": "null",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 194,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 205,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 221,
    "end": 224
  },
  {
    "type": "Null",
    "value": "null",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 263,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 297,
    "end": 298
  },
  {
    "type": "Null",
    "value": "null",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 323,
    "end": 324
  },
  {
    "type": "Null",
    "value": "null",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 347,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
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
    "value": "foo2",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 376,
    "end": 379
  },
  {
    "type": "Null",
    "value": "null",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 448,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 484,
    "end": 485
  },
  {
    "type": "Null",
    "value": "null",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "getFooOrNull",
    "start": 507,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 523,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "obj",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 563,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 572,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 583,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 590,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 599,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 606,
    "end": 607
  },
  {
    "type": "Null",
    "value": "null",
    "start": 608,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumberOrNull",
    "start": 634,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 661,
    "end": 664
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 665,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 718,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "re",
    "start": 724,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728
  },
  {
    "type": "RegularExpression",
    "value": "/./g",
    "regex": {
      "flags": "g",
      "pattern": "."
    },
    "start": 729,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 734,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 738,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "RegExpExecArray",
    "start": 745,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 761,
    "end": 762
  },
  {
    "type": "Null",
    "value": "null",
    "start": 763,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 769,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "re",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "exec",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "String",
    "value": "\"xxx\"",
    "start": 793,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "!=",
    "start": 801,
    "end": 803
  },
  {
    "type": "Null",
    "value": "null",
    "start": 804,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 816,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 822,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 831,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 836,
    "end": 837
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 840,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 849,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 854,
    "end": 855
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 858,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 865,
    "end": 866
  }
]
```
