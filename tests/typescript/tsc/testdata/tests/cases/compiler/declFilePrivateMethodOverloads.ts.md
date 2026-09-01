__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IContext",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "name": "someMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 35
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 25,
            "end": 38
          }
        ],
        "start": 19,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 49
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 86
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContext",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 111
                      },
                      "typeArguments": null,
                      "start": 103,
                      "end": 111
                    },
                    "start": 101,
                    "end": 111
                  },
                  "start": 87,
                  "end": 111
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 134,
                                "end": 142
                              },
                              "typeArguments": null,
                              "start": 134,
                              "end": 142
                            },
                            "start": 132,
                            "end": 142
                          },
                          "start": 118,
                          "end": 142
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 147,
                          "end": 151
                        },
                        "start": 144,
                        "end": 151
                      },
                      "start": 117,
                      "end": 151
                    },
                    "start": 115,
                    "end": 151
                  },
                  "start": 113,
                  "end": 151
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 86,
              "end": 153
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 56,
            "end": 153
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 188
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 215
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 216,
                              "end": 224
                            },
                            "typeArguments": null,
                            "start": 216,
                            "end": 224
                          }
                        ],
                        "start": 215,
                        "end": 225
                      },
                      "start": 210,
                      "end": 225
                    },
                    "start": 208,
                    "end": 225
                  },
                  "start": 189,
                  "end": 225
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 248,
                                "end": 256
                              },
                              "typeArguments": null,
                              "start": 248,
                              "end": 256
                            },
                            "start": 246,
                            "end": 256
                          },
                          "start": 232,
                          "end": 256
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 261,
                          "end": 265
                        },
                        "start": 258,
                        "end": 265
                      },
                      "start": 231,
                      "end": 265
                    },
                    "start": 229,
                    "end": 265
                  },
                  "start": 227,
                  "end": 265
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 188,
              "end": 267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 158,
            "end": 267
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_forEachBindingContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 302
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
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 310
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 333,
                                "end": 341
                              },
                              "typeArguments": null,
                              "start": 333,
                              "end": 341
                            },
                            "start": 331,
                            "end": 341
                          },
                          "start": 317,
                          "end": 341
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 346,
                          "end": 350
                        },
                        "start": 343,
                        "end": 350
                      },
                      "start": 316,
                      "end": 350
                    },
                    "start": 314,
                    "end": 350
                  },
                  "start": 312,
                  "end": 350
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 353,
                  "end": 357
                },
                "start": 351,
                "end": 357
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 358,
                "end": 390
              },
              "expression": false,
              "start": 302,
              "end": 390
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 272,
            "end": 390
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 431
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContext",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IContext",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 448,
                        "end": 456
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 456
                    },
                    "start": 446,
                    "end": 456
                  },
                  "start": 432,
                  "end": 456
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 431,
              "end": 458
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 396,
            "end": 458
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 498
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bindingContextArray",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 520,
                        "end": 525
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 526,
                              "end": 534
                            },
                            "typeArguments": null,
                            "start": 526,
                            "end": 534
                          }
                        ],
                        "start": 525,
                        "end": 535
                      },
                      "start": 520,
                      "end": 535
                    },
                    "start": 518,
                    "end": 535
                  },
                  "start": 499,
                  "end": 535
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindingContext",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IContext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 558,
                                "end": 566
                              },
                              "typeArguments": null,
                              "start": 558,
                              "end": 566
                            },
                            "start": 556,
                            "end": 566
                          },
                          "start": 542,
                          "end": 566
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 571,
                          "end": 575
                        },
                        "start": 568,
                        "end": 575
                      },
                      "start": 541,
                      "end": 575
                    },
                    "start": 539,
                    "end": 575
                  },
                  "start": 537,
                  "end": 575
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 498,
              "end": 577
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 463,
            "end": 577
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloadWithArityDifference",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 617
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
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 625
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 628,
                  "end": 632
                },
                "start": 626,
                "end": 632
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 633,
                "end": 665
              },
              "expression": false,
              "start": 617,
              "end": 665
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 582,
            "end": 665
          }
        ],
        "start": 50,
        "end": 667
      },
      "abstract": false,
      "declare": false,
      "start": 41,
      "end": 667
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 684
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload1",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 708
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 716
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 720
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 708,
              "end": 722
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 691,
            "end": 722
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload2",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 745
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 753
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 745,
              "end": 755
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 728,
            "end": 755
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overload2",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 777
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 785
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 789
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 777,
              "end": 791
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 760,
            "end": 791
          }
        ],
        "start": 685,
        "end": 793
      },
      "abstract": false,
      "declare": true,
      "start": 668,
      "end": 793
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 793
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 10,
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
    "value": "someMethod",
    "start": 25,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 56,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "_forEachBindingContext",
    "start": 64,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "bindingContext",
    "start": 87,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "bindingContext",
    "start": 118,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 134,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 144,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 158,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "_forEachBindingContext",
    "start": 166,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "bindingContextArray",
    "start": 189,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 216,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "bindingContext",
    "start": 232,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 248,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 272,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "_forEachBindingContext",
    "start": 280,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 303,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "bindingContext",
    "start": 317,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 333,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 343,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 396,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "overloadWithArityDifference",
    "start": 404,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "bindingContext",
    "start": 432,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 448,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 463,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "overloadWithArityDifference",
    "start": 471,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "bindingContextArray",
    "start": 499,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 526,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "bindingContext",
    "start": 542,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "IContext",
    "start": 558,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 568,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 571,
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
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 582,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "overloadWithArityDifference",
    "start": 590,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 618,
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
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 668,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 676,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 682,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 691,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "overload1",
    "start": 699,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 709,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 718,
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
    "value": "private",
    "start": 728,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "overload2",
    "start": 736,
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
    "value": "context",
    "start": 746,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 760,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "overload2",
    "start": 768,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 778,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 787,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  }
]
```
