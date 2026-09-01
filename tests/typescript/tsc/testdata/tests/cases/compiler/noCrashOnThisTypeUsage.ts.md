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
        "name": "IListenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "name": "changeListeners",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 45,
                        "end": 53
                      },
                      "typeArguments": null,
                      "start": 45,
                      "end": 53
                    },
                    "start": 45,
                    "end": 55
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 58,
                    "end": 62
                  }
                ],
                "start": 45,
                "end": 62
              },
              "start": 43,
              "end": 62
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 62
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "observe",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 74
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
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
                        "name": "change",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 93,
                            "end": 96
                          },
                          "start": 91,
                          "end": 96
                        },
                        "start": 85,
                        "end": 96
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oldValue",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 109,
                            "end": 112
                          },
                          "start": 107,
                          "end": 112
                        },
                        "start": 98,
                        "end": 112
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 117,
                        "end": 121
                      },
                      "start": 114,
                      "end": 121
                    },
                    "start": 84,
                    "end": 121
                  },
                  "start": 82,
                  "end": 121
                },
                "start": 75,
                "end": 121
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fireImmediately",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 141,
                    "end": 148
                  },
                  "start": 139,
                  "end": 148
                },
                "start": 123,
                "end": 148
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 151,
                "end": 155
              },
              "start": 149,
              "end": 155
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 67,
            "end": 155
          }
        ],
        "start": 22,
        "end": 157
      },
      "declare": false,
      "start": 0,
      "end": 157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notifyListeners",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 183
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
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 183,
        "end": 186
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "listenable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IListenable",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 210
              },
              "typeArguments": null,
              "start": 199,
              "end": 210
            },
            "start": 197,
            "end": 210
          },
          "start": 187,
          "end": 210
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "change",
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
                "start": 220,
                "end": 221
              },
              "typeArguments": null,
              "start": 220,
              "end": 221
            },
            "start": 218,
            "end": 221
          },
          "start": 212,
          "end": 221
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 223,
        "end": 226
      },
      "expression": false,
      "start": 159,
      "end": 226
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObservableValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 256
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
                "start": 257,
                "end": 258
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 257,
              "end": 258
            }
          ],
          "start": 256,
          "end": 259
        },
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 277
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
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
                            "start": 301,
                            "end": 302
                          },
                          "typeArguments": null,
                          "start": 301,
                          "end": 302
                        },
                        "start": 299,
                        "end": 302
                      },
                      "start": 294,
                      "end": 302
                    },
                    "readonly": false,
                    "static": false,
                    "start": 287,
                    "end": 302
                  }
                ],
                "returnType": null,
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
                            "name": "newValue",
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
                                  "start": 335,
                                  "end": 336
                                },
                                "typeArguments": null,
                                "start": 335,
                                "end": 336
                              },
                              "start": 333,
                              "end": 336
                            },
                            "start": 325,
                            "end": 336
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 344
                          },
                          "definite": false,
                          "start": 325,
                          "end": 344
                        }
                      ],
                      "declare": false,
                      "start": 319,
                      "end": 345
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
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 370,
                                "end": 373
                              },
                              "start": 368,
                              "end": 373
                            },
                            "start": 360,
                            "end": 373
                          },
                          "init": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 376,
                            "end": 380
                          },
                          "definite": false,
                          "start": 360,
                          "end": 380
                        }
                      ],
                      "declare": false,
                      "start": 354,
                      "end": 381
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "notifyListeners",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 405
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 406,
                            "end": 410
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 426,
                                  "end": 430
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "update",
                                  "raw": "\"update\"",
                                  "start": 432,
                                  "end": 440
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 426,
                                "end": 440
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 454,
                                  "end": 460
                                },
                                "value": {
                                  "type": "ThisExpression",
                                  "start": 462,
                                  "end": 466
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 454,
                                "end": 466
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 488
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 488
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 480,
                                "end": 488
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 502,
                                  "end": 510
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 502,
                                  "end": 510
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 502,
                                "end": 510
                              }
                            ],
                            "start": 412,
                            "end": 520
                          }
                        ],
                        "optional": false,
                        "start": 390,
                        "end": 521
                      },
                      "directive": null,
                      "start": 390,
                      "end": 522
                    }
                  ],
                  "start": 309,
                  "end": 528
                },
                "expression": false,
                "start": 277,
                "end": 528
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 266,
              "end": 528
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "changeListeners",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 548
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 550,
                          "end": 558
                        },
                        "typeArguments": null,
                        "start": 550,
                        "end": 558
                      },
                      "start": 550,
                      "end": 560
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 563,
                      "end": 567
                    }
                  ],
                  "start": 550,
                  "end": 567
                },
                "start": 548,
                "end": 567
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 570,
                "end": 572
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 533,
              "end": 573
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "observe",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 585
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
                    "name": "handler",
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
                            "name": "change",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 604,
                                "end": 607
                              },
                              "start": 602,
                              "end": 607
                            },
                            "start": 596,
                            "end": 607
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldValue",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 620,
                                "end": 623
                              },
                              "start": 618,
                              "end": 623
                            },
                            "start": 609,
                            "end": 623
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 628,
                            "end": 632
                          },
                          "start": 625,
                          "end": 632
                        },
                        "start": 595,
                        "end": 632
                      },
                      "start": 593,
                      "end": 632
                    },
                    "start": 586,
                    "end": 632
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fireImmediately",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 652,
                        "end": 659
                      },
                      "start": 650,
                      "end": 659
                    },
                    "start": 634,
                    "end": 659
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 661,
                  "end": 663
                },
                "expression": false,
                "start": 585,
                "end": 663
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 578,
              "end": 663
            }
          ],
          "start": 260,
          "end": 665
        },
        "abstract": false,
        "declare": false,
        "start": 235,
        "end": 665
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 228,
      "end": 665
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 665
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
    "value": "IListenable",
    "start": 10,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "changeListeners",
    "start": 28,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 45,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 56,
    "end": 57
  },
  {
    "type": "Null",
    "value": "null",
    "start": 58,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "observe",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "change",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 98,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 114,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 117,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "fireImmediately",
    "start": 123,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "notifyListeners",
    "start": 168,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "listenable",
    "start": 187,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "IListenable",
    "start": 199,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "change",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 228,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "ObservableValue",
    "start": 241,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 266,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 287,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "value",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 354,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 360,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Null",
    "value": "null",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "notifyListeners",
    "start": 390,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "String",
    "value": "\"update\"",
    "start": 432,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 480,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 502,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "changeListeners",
    "start": 533,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 561,
    "end": 562
  },
  {
    "type": "Null",
    "value": "null",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "observe",
    "start": 578,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 586,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "change",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 609,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 625,
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
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "fireImmediately",
    "start": 634,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 652,
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
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665
  }
]
```
