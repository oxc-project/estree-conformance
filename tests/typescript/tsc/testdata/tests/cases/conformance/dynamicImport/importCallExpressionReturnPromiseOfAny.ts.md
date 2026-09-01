__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 17
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  }
]
```
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
            "name": "defaultModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 25
          },
          "start": 7,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./defaultPath",
        "raw": "\"./defaultPath\"",
        "start": 31,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 47
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 77
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 81,
          "end": 87
        },
        "start": 79,
        "end": 87
      },
      "body": null,
      "expression": false,
      "start": 48,
      "end": 88
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValidSomeCondition",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 124
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 128,
          "end": 135
        },
        "start": 126,
        "end": 135
      },
      "body": null,
      "expression": false,
      "start": 89,
      "end": 136
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
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 161,
                "end": 168
              },
              "start": 159,
              "end": 168
            },
            "start": 149,
            "end": 168
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 168
        }
      ],
      "declare": true,
      "start": 137,
      "end": 169
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
            "name": "directory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 195,
                "end": 201
              },
              "start": 193,
              "end": 201
            },
            "start": 184,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 201
        }
      ],
      "declare": true,
      "start": 170,
      "end": 202
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
            "name": "moduleFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 229,
                "end": 235
              },
              "start": 227,
              "end": 235
            },
            "start": 217,
            "end": 235
          },
          "init": null,
          "definite": false,
          "start": 217,
          "end": 235
        }
      ],
      "declare": true,
      "start": 203,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 245,
              "end": 248
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\\\\",
                "cooked": "\\"
              },
              "tail": false,
              "start": 257,
              "end": 262
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 272,
              "end": 274
            }
          ],
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "directory",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 257
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 272
            }
          ],
          "start": 245,
          "end": 274
        },
        "options": null,
        "phase": null,
        "start": 238,
        "end": 275
      },
      "directive": null,
      "start": 238,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 296
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 284,
          "end": 298
        },
        "options": null,
        "phase": null,
        "start": 277,
        "end": 299
      },
      "directive": null,
      "start": 277,
      "end": 300
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 308
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValidSomeCondition",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 336
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 318,
                "end": 338
              },
              "consequent": {
                "type": "Literal",
                "value": "./0",
                "raw": "\"./0\"",
                "start": 341,
                "end": 346
              },
              "alternate": {
                "type": "Literal",
                "value": "externalModule",
                "raw": "\"externalModule\"",
                "start": 349,
                "end": 365
              },
              "start": 318,
              "end": 365
            },
            "options": null,
            "phase": null,
            "start": 311,
            "end": 366
          },
          "definite": false,
          "start": 306,
          "end": 366
        }
      ],
      "declare": false,
      "start": 302,
      "end": 367
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 383
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 384,
                      "end": 387
                    }
                  ],
                  "start": 383,
                  "end": 388
                },
                "start": 376,
                "end": 388
              },
              "start": 374,
              "end": 388
            },
            "start": 372,
            "end": 388
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 410
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 398,
              "end": 412
            },
            "options": null,
            "phase": null,
            "start": 391,
            "end": 413
          },
          "definite": false,
          "start": 372,
          "end": 413
        }
      ],
      "declare": false,
      "start": 368,
      "end": 414
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
            "name": "p11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 431
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 452
                      },
                      "typeArguments": null,
                      "start": 432,
                      "end": 452
                    }
                  ],
                  "start": 431,
                  "end": 453
                },
                "start": 424,
                "end": 453
              },
              "start": 422,
              "end": 453
            },
            "start": 419,
            "end": 453
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 475
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 463,
              "end": 477
            },
            "options": null,
            "phase": null,
            "start": 456,
            "end": 478
          },
          "definite": false,
          "start": 419,
          "end": 478
        }
      ],
      "declare": false,
      "start": 415,
      "end": 479
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 488
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ImportExpression",
              "source": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "whatToLoad",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 508
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSpecifier",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 523
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 511,
                  "end": 525
                },
                "alternate": {
                  "type": "Literal",
                  "value": "defaulPath",
                  "raw": "\"defaulPath\"",
                  "start": 528,
                  "end": 540
                },
                "start": 498,
                "end": 540
              },
              "options": null,
              "phase": null,
              "start": 491,
              "end": 541
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 552
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defaultModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 560,
                      "end": 573
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 573
                  }
                ],
                "start": 552,
                "end": 574
              },
              "start": 545,
              "end": 574
            },
            "start": 491,
            "end": 574
          },
          "definite": false,
          "start": 486,
          "end": 574
        }
      ],
      "declare": false,
      "start": 480,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 578
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 583
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 583
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 588
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 609
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 613
                      },
                      "optional": false,
                      "computed": false,
                      "start": 605,
                      "end": 613
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 605,
                    "end": 615
                  },
                  "start": 598,
                  "end": 616
                }
              ],
              "start": 592,
              "end": 638
            },
            "id": null,
            "generator": false,
            "start": 584,
            "end": 638
          }
        ],
        "optional": false,
        "start": 576,
        "end": 639
      },
      "directive": null,
      "start": 576,
      "end": 640
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
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 649,
                "end": 655
              },
              "start": 647,
              "end": 655
            },
            "start": 646,
            "end": 655
          },
          "init": null,
          "definite": false,
          "start": 646,
          "end": 655
        }
      ],
      "declare": false,
      "start": 642,
      "end": 656
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 672
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 693
                      },
                      "typeArguments": null,
                      "start": 673,
                      "end": 693
                    }
                  ],
                  "start": 672,
                  "end": 694
                },
                "start": 665,
                "end": 694
              },
              "start": 663,
              "end": 694
            },
            "start": 661,
            "end": 694
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 718
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 706,
                "end": 720
              },
              "start": 704,
              "end": 720
            },
            "options": null,
            "phase": null,
            "start": 697,
            "end": 721
          },
          "definite": false,
          "start": 661,
          "end": 721
        }
      ],
      "declare": false,
      "start": 657,
      "end": 722
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loadModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 745
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "directories",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 759,
                "end": 765
              },
              "start": 759,
              "end": 767
            },
            "start": 757,
            "end": 767
          },
          "start": 746,
          "end": 767
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 795
                  },
                  "init": null,
                  "definite": false,
                  "start": 786,
                  "end": 795
                }
              ],
              "declare": false,
              "start": 780,
              "end": 795
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "directories",
              "optional": false,
              "typeAnnotation": null,
              "start": 799,
              "end": 810
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
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 828,
                        "end": 832
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 835,
                            "end": 838
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "\\\\moduleFile",
                              "cooked": "\\moduleFile"
                            },
                            "tail": true,
                            "start": 847,
                            "end": 861
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "directory",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 838,
                            "end": 847
                          }
                        ],
                        "start": 835,
                        "end": 861
                      },
                      "definite": false,
                      "start": 828,
                      "end": 861
                    }
                  ],
                  "declare": false,
                  "start": 822,
                  "end": 862
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 884,
                        "end": 888
                      },
                      "start": 878,
                      "end": 888
                    },
                    "options": null,
                    "phase": null,
                    "start": 871,
                    "end": 889
                  },
                  "directive": null,
                  "start": 871,
                  "end": 890
                }
              ],
              "start": 812,
              "end": 896
            },
            "start": 775,
            "end": 896
          }
        ],
        "start": 769,
        "end": 898
      },
      "expression": false,
      "start": 724,
      "end": 898
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 898
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "defaultModule",
    "start": 12,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 26,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"./defaultPath\"",
    "start": 31,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 48,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 56,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 65,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 89,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "ValidSomeCondition",
    "start": 106,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 137,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 145,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "whatToLoad",
    "start": 149,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 170,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 184,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 203,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "moduleFile",
    "start": 217,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 248,
    "end": 257
  },
  {
    "type": "Template",
    "value": "}\\\\${",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "moduleFile",
    "start": 262,
    "end": 272
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "import",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 284,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "ValidSomeCondition",
    "start": 318,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 339,
    "end": 340
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "String",
    "value": "\"externalModule\"",
    "start": 349,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 376,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 398,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "p11",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 424,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 432,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "defaultModule",
    "start": 439,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 463,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 480,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "whatToLoad",
    "start": 498,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 511,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "String",
    "value": "\"defaulPath\"",
    "start": 528,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 545,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 553,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "defaultModule",
    "start": 560,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 598,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 610,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 657,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 673,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "defaultModule",
    "start": 680,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 697,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "getSpecifier",
    "start": 706,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 724,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "loadModule",
    "start": 735,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "directories",
    "start": 746,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 767,
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
    "value": "for",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 780,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 786,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 796,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "directories",
    "start": 799,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 822,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 828,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 833,
    "end": 834
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 835,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 838,
    "end": 847
  },
  {
    "type": "Template",
    "value": "}\\\\moduleFile`",
    "start": 847,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 871,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 878,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  }
]
```
