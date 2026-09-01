__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "fieldName",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 29
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 30,
                      "end": 36
                    },
                    "optional": false,
                    "computed": false,
                    "start": 25,
                    "end": 36
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 25,
                  "end": 38
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 41,
                  "end": 44
                },
                "start": 25,
                "end": 44
              },
              "consequent": {
                "type": "Literal",
                "value": "f1",
                "raw": "\"f1\"",
                "start": 47,
                "end": 51
              },
              "alternate": {
                "type": "Literal",
                "value": "f2",
                "raw": "\"f2\"",
                "start": 54,
                "end": 58
              },
              "start": 25,
              "end": 58
            },
            "definite": false,
            "start": 13,
            "end": 58
          }
        ],
        "declare": false,
        "start": 7,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 59
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
              "name": "conatainer",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 83
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
                    "name": "fieldName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 102
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
                            "value": "result",
                            "raw": "\"result\"",
                            "start": 123,
                            "end": 131
                          },
                          "start": 116,
                          "end": 132
                        }
                      ],
                      "start": 106,
                      "end": 138
                    },
                    "expression": false,
                    "start": 103,
                    "end": 138
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 92,
                  "end": 138
                }
              ],
              "start": 86,
              "end": 140
            },
            "definite": false,
            "start": 73,
            "end": 140
          }
        ],
        "declare": false,
        "start": 67,
        "end": 141
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 141
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
            "name": "classFieldName",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 163
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 170
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 177
                  },
                  "optional": false,
                  "computed": false,
                  "start": 166,
                  "end": 177
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 166,
                "end": 179
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 182,
                "end": 185
              },
              "start": 166,
              "end": 185
            },
            "consequent": {
              "type": "Literal",
              "value": "g1",
              "raw": "\"g1\"",
              "start": 188,
              "end": 192
            },
            "alternate": {
              "type": "Literal",
              "value": "g2",
              "raw": "\"g2\"",
              "start": 195,
              "end": 199
            },
            "start": 166,
            "end": 199
          },
          "definite": false,
          "start": 149,
          "end": 199
        }
      ],
      "declare": false,
      "start": 143,
      "end": 200
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
            "name": "otherField",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 217
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldName",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 234
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "g1",
                "raw": "\"g1\"",
                "start": 239,
                "end": 243
              },
              "start": 220,
              "end": 243
            },
            "consequent": {
              "type": "Literal",
              "value": "g2",
              "raw": "\"g2\"",
              "start": 246,
              "end": 250
            },
            "alternate": {
              "type": "Literal",
              "value": "g1",
              "raw": "\"g1\"",
              "start": 253,
              "end": 257
            },
            "start": 220,
            "end": 257
          },
          "definite": false,
          "start": 207,
          "end": 257
        }
      ],
      "declare": false,
      "start": 201,
      "end": 258
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
            "name": "staticField",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 276
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 283
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 290
                  },
                  "optional": false,
                  "computed": false,
                  "start": 279,
                  "end": 290
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 279,
                "end": 292
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 295,
                "end": 298
              },
              "start": 279,
              "end": 298
            },
            "consequent": {
              "type": "Literal",
              "value": "s1",
              "raw": "\"s1\"",
              "start": 301,
              "end": 305
            },
            "alternate": {
              "type": "Literal",
              "value": "s2",
              "raw": "\"s2\"",
              "start": 308,
              "end": 312
            },
            "start": 279,
            "end": 312
          },
          "definite": false,
          "start": 265,
          "end": 312
        }
      ],
      "declare": false,
      "start": 259,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Holder",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 333
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
                "name": "classFieldName",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 355
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
                        "value": "value",
                        "raw": "\"value\"",
                        "start": 376,
                        "end": 383
                      },
                      "start": 369,
                      "end": 384
                    }
                  ],
                  "start": 359,
                  "end": 390
                },
                "expression": false,
                "start": 356,
                "end": 390
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 340,
              "end": 390
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "otherField",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 406
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
                        "value": 42,
                        "raw": "42",
                        "start": 427,
                        "end": 429
                      },
                      "start": 420,
                      "end": 430
                    }
                  ],
                  "start": 410,
                  "end": 436
                },
                "expression": false,
                "start": 407,
                "end": 436
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 395,
              "end": 436
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 460
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
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 483,
                              "end": 489
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 491,
                              "end": 495
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 483,
                            "end": 495
                          }
                        ],
                        "start": 481,
                        "end": 497
                      },
                      "start": 474,
                      "end": 498
                    }
                  ],
                  "start": 464,
                  "end": 504
                },
                "expression": false,
                "start": 461,
                "end": 504
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 441,
              "end": 504
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 528
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
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 551,
                              "end": 557
                            },
                            "value": {
                              "type": "Literal",
                              "value": "sometimes",
                              "raw": "\"sometimes\"",
                              "start": 559,
                              "end": 570
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 551,
                            "end": 570
                          }
                        ],
                        "start": 549,
                        "end": 572
                      },
                      "start": 542,
                      "end": 573
                    }
                  ],
                  "start": 532,
                  "end": 579
                },
                "expression": false,
                "start": 529,
                "end": 579
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 509,
              "end": 579
            }
          ],
          "start": 334,
          "end": 581
        },
        "abstract": false,
        "declare": false,
        "start": 321,
        "end": 581
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 314,
      "end": 581
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
              "name": "staticLookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 699
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Holder",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 708
              },
              "property": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "some",
                  "raw": "\"some\"",
                  "start": 709,
                  "end": 715
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "thing",
                  "raw": "\"thing\"",
                  "start": 718,
                  "end": 725
                },
                "start": 709,
                "end": 725
              },
              "optional": false,
              "computed": true,
              "start": 702,
              "end": 726
            },
            "definite": false,
            "start": 687,
            "end": 726
          }
        ],
        "declare": false,
        "start": 681,
        "end": 727
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 674,
      "end": 727
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
              "name": "instanceLookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 755
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Holder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 769
                },
                "typeArguments": null,
                "arguments": [],
                "start": 759,
                "end": 771
              },
              "property": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "some",
                  "raw": "\"some\"",
                  "start": 773,
                  "end": 779
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "thing",
                  "raw": "\"thing\"",
                  "start": 782,
                  "end": 789
                },
                "start": 773,
                "end": 789
              },
              "optional": false,
              "computed": true,
              "start": 758,
              "end": 790
            },
            "definite": false,
            "start": 741,
            "end": 790
          }
        ],
        "declare": false,
        "start": 735,
        "end": 791
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 728,
      "end": 791
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 791
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "fieldName",
    "start": 13,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"f1\"",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "String",
    "value": "\"f2\"",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "conatainer",
    "start": 73,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "fieldName",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 116,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"result\"",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "classFieldName",
    "start": 149,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"g1\"",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"g2\"",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "otherField",
    "start": 207,
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
    "value": "classFieldName",
    "start": 220,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 235,
    "end": 238
  },
  {
    "type": "String",
    "value": "\"g1\"",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 244,
    "end": 245
  },
  {
    "type": "String",
    "value": "\"g2\"",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "String",
    "value": "\"g1\"",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "staticField",
    "start": 265,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"s1\"",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "String",
    "value": "\"s2\"",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 314,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 321,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Holder",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "classFieldName",
    "start": 341,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 369,
    "end": 375
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 376,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "otherField",
    "start": 396,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
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
    "type": "Keyword",
    "value": "return",
    "start": 420,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 427,
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
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "staticField",
    "start": 449,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 491,
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
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 509,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "staticField",
    "start": 517,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "static",
    "start": 551,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "String",
    "value": "\"sometimes\"",
    "start": 559,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 674,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 681,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "staticLookup",
    "start": 687,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "Holder",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 708,
    "end": 709
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 709,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 716,
    "end": 717
  },
  {
    "type": "String",
    "value": "\"thing\"",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 728,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 735,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "instanceLookup",
    "start": 741,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 759,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "Holder",
    "start": 763,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 772,
    "end": 773
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 780,
    "end": 781
  },
  {
    "type": "String",
    "value": "\"thing\"",
    "start": 782,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  }
]
```
