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
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
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
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 29
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 32,
                  "end": 33
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 36,
                  "end": 37
                },
                "start": 32,
                "end": 37
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 24,
              "end": 38
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 49
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
                  "start": 52,
                  "end": 54
                },
                "expression": false,
                "start": 49,
                "end": 54
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 43,
              "end": 54
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 68
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
                    "start": 72,
                    "end": 76
                  },
                  "start": 70,
                  "end": 76
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 77,
                  "end": 79
                },
                "expression": false,
                "start": 68,
                "end": 79
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 60,
              "end": 79
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodParams",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 97
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 102,
                    "end": 106
                  },
                  "start": 100,
                  "end": 106
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 107,
                  "end": 109
                },
                "expression": false,
                "start": 97,
                "end": 109
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 85,
              "end": 109
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodParams2",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 127
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 132,
                        "end": 133
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 136,
                        "end": 137
                      },
                      "start": 132,
                      "end": 137
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 137
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 140,
                    "end": 144
                  },
                  "start": 138,
                  "end": 144
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 145,
                  "end": 147
                },
                "expression": false,
                "start": 127,
                "end": 147
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 114,
              "end": 147
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getOnly",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 164
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 176,
                          "end": 177
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 180,
                          "end": 181
                        },
                        "start": 176,
                        "end": 181
                      },
                      "start": 169,
                      "end": 181
                    }
                  ],
                  "start": 167,
                  "end": 183
                },
                "expression": false,
                "start": 164,
                "end": 183
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 153,
              "end": 183
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "setOnly",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 199
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
                    "start": 200,
                    "end": 205
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 207,
                  "end": 210
                },
                "expression": false,
                "start": 199,
                "end": 210
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 188,
              "end": 210
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetBad",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 229
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
                        "start": 241,
                        "end": 242
                      },
                      "start": 234,
                      "end": 242
                    }
                  ],
                  "start": 232,
                  "end": 244
                },
                "expression": false,
                "start": 229,
                "end": 244
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 216,
              "end": 244
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetBad",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 262
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
                    "start": 263,
                    "end": 268
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 270,
                  "end": 273
                },
                "expression": false,
                "start": 262,
                "end": 273
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 249,
              "end": 273
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 291
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
                    "start": 295,
                    "end": 301
                  },
                  "start": 293,
                  "end": 301
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
                        "start": 311,
                        "end": 312
                      },
                      "start": 304,
                      "end": 312
                    }
                  ],
                  "start": 302,
                  "end": 314
                },
                "expression": false,
                "start": 291,
                "end": 314
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 279,
              "end": 314
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 337
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 339,
                  "end": 342
                },
                "expression": false,
                "start": 331,
                "end": 342
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 319,
              "end": 342
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk2",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 361
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
                        "start": 373,
                        "end": 374
                      },
                      "start": 366,
                      "end": 374
                    }
                  ],
                  "start": 364,
                  "end": 376
                },
                "expression": false,
                "start": 361,
                "end": 376
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 348,
              "end": 376
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk2",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 394
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
                        "start": 402,
                        "end": 408
                      },
                      "start": 400,
                      "end": 408
                    },
                    "start": 395,
                    "end": 408
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 410,
                  "end": 413
                },
                "expression": false,
                "start": 394,
                "end": 413
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 381,
              "end": 413
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk3",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 432
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
                    "start": 436,
                    "end": 442
                  },
                  "start": 434,
                  "end": 442
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
                        "start": 452,
                        "end": 453
                      },
                      "start": 445,
                      "end": 453
                    }
                  ],
                  "start": 443,
                  "end": 455
                },
                "expression": false,
                "start": 432,
                "end": 455
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 419,
              "end": 455
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSetOk3",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 473
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
                        "start": 481,
                        "end": 487
                      },
                      "start": 479,
                      "end": 487
                    },
                    "start": 474,
                    "end": 487
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 489,
                  "end": 492
                },
                "expression": false,
                "start": 473,
                "end": 492
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 460,
              "end": 492
            }
          ],
          "start": 17,
          "end": 494
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 494
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
            "name": "noAnnotationStringName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 524,
                "end": 530
              },
              "start": 522,
              "end": 530
            },
            "start": 500,
            "end": 530
          },
          "init": {
            "type": "Literal",
            "value": "noAnnotationStringName",
            "raw": "\"noAnnotationStringName\"",
            "start": 533,
            "end": 557
          },
          "definite": false,
          "start": 500,
          "end": 557
        }
      ],
      "declare": false,
      "start": 496,
      "end": 558
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
            "name": "noParamAnnotationStringName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 592,
                "end": 598
              },
              "start": 590,
              "end": 598
            },
            "start": 563,
            "end": 598
          },
          "init": {
            "type": "Literal",
            "value": "noParamAnnotationStringName",
            "raw": "\"noParamAnnotationStringName\"",
            "start": 601,
            "end": 630
          },
          "definite": false,
          "start": 563,
          "end": 630
        }
      ],
      "declare": false,
      "start": 559,
      "end": 631
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
            "name": "noAnnotationLiteralName",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 662
          },
          "init": {
            "type": "Literal",
            "value": "noAnnotationLiteralName",
            "raw": "\"noAnnotationLiteralName\"",
            "start": 665,
            "end": 690
          },
          "definite": false,
          "start": 639,
          "end": 690
        }
      ],
      "declare": false,
      "start": 633,
      "end": 691
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
            "name": "noParamAnnotationLiteralName",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 726
          },
          "init": {
            "type": "Literal",
            "value": "noParamAnnotationLiteralName",
            "raw": "\"noParamAnnotationLiteralName\"",
            "start": 729,
            "end": 759
          },
          "definite": false,
          "start": 698,
          "end": 759
        }
      ],
      "declare": false,
      "start": 692,
      "end": 760
    },
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
          "start": 775,
          "end": 776
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
                "name": "missing",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 855
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 859,
                "end": 860
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 847,
              "end": 861
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 895
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
                    "start": 900,
                    "end": 904
                  },
                  "start": 898,
                  "end": 904
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 905,
                  "end": 908
                },
                "expression": false,
                "start": 896,
                "end": 908
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 871,
              "end": 908
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noParamAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 943
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      },
                      "start": 946,
                      "end": 954
                    },
                    "start": 945,
                    "end": 954
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 957,
                    "end": 961
                  },
                  "start": 955,
                  "end": 961
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 962,
                  "end": 965
                },
                "expression": false,
                "start": 944,
                "end": 965
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 914,
              "end": 965
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 994
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
                  "start": 998,
                  "end": 1001
                },
                "expression": false,
                "start": 995,
                "end": 1001
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 971,
              "end": 1001
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noParamAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1008,
                "end": 1035
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1037,
                    "end": 1038
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1041,
                    "end": 1045
                  },
                  "start": 1039,
                  "end": 1045
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1046,
                  "end": 1049
                },
                "expression": false,
                "start": 1036,
                "end": 1049
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1007,
              "end": 1049
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1060,
                "end": 1082
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
                        "start": 1095,
                        "end": 1096
                      },
                      "start": 1088,
                      "end": 1097
                    }
                  ],
                  "start": 1086,
                  "end": 1098
                },
                "expression": false,
                "start": 1083,
                "end": 1098
              },
              "kind": "get",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1055,
              "end": 1098
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noParamAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1136
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
                    "start": 1138,
                    "end": 1143
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1145,
                  "end": 1148
                },
                "expression": false,
                "start": 1137,
                "end": 1148
              },
              "kind": "set",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1104,
              "end": 1148
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 1156,
                    "end": 1159
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 1162,
                    "end": 1165
                  },
                  "start": 1156,
                  "end": 1165
                },
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "AB",
                    "raw": "\"AB\"",
                    "start": 1170,
                    "end": 1174
                  },
                  "start": 1170,
                  "end": 1174
                },
                "start": 1155,
                "end": 1174
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1179,
                "end": 1180
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 1154,
              "end": 1181
            }
          ],
          "start": 777,
          "end": 1184
        },
        "abstract": false,
        "declare": false,
        "start": 769,
        "end": 1184
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 762,
      "end": 1184
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 1203,
          "end": 1204
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationStringName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1212,
                "end": 1234
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1237,
                    "end": 1239
                  },
                  "start": 1237,
                  "end": 1239
                },
                "start": 1235,
                "end": 1239
              },
              "accessibility": null,
              "static": false,
              "start": 1211,
              "end": 1240
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noAnnotationLiteralName",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1269
              },
              "computed": true,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1245,
              "end": 1273
            }
          ],
          "start": 1205,
          "end": 1275
        },
        "declare": false,
        "start": 1193,
        "end": 1275
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1186,
      "end": 1275
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1275
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
    "value": "Cls",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "methodOk",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "methodParams",
    "start": 85,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "methodParams2",
    "start": 114,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "getOnly",
    "start": 157,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 169,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 178,
    "end": 179
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "setOnly",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 216,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "getSetBad",
    "start": 220,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 234,
    "end": 240
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "getSetBad",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "getSetOk",
    "start": 283,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 304,
    "end": 310
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "getSetOk",
    "start": 323,
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
    "value": "value",
    "start": 332,
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
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "getSetOk2",
    "start": 352,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 366,
    "end": 372
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "getSetOk2",
    "start": 385,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "getSetOk3",
    "start": 423,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 445,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "getSetOk3",
    "start": 464,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "noAnnotationStringName",
    "start": 500,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532
  },
  {
    "type": "String",
    "value": "\"noAnnotationStringName\"",
    "start": 533,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 559,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "noParamAnnotationStringName",
    "start": 563,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "String",
    "value": "\"noParamAnnotationStringName\"",
    "start": 601,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 633,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "noAnnotationLiteralName",
    "start": 639,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "String",
    "value": "\"noAnnotationLiteralName\"",
    "start": 665,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "noParamAnnotationLiteralName",
    "start": 698,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728
  },
  {
    "type": "String",
    "value": "\"noParamAnnotationLiteralName\"",
    "start": 729,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 762,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 769,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "missing",
    "start": 848,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "noAnnotationLiteralName",
    "start": 872,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 900,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "noParamAnnotationLiteralName",
    "start": 915,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 957,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "noAnnotationStringName",
    "start": 972,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "noParamAnnotationStringName",
    "start": 1008,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1041,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "noAnnotationStringName",
    "start": 1060,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1082,
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
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "noParamAnnotationStringName",
    "start": 1109,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1138,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "String",
    "value": "\"AB\"",
    "start": 1170,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1193,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "noAnnotationStringName",
    "start": 1212,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1237,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "noAnnotationLiteralName",
    "start": 1246,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  }
]
```
