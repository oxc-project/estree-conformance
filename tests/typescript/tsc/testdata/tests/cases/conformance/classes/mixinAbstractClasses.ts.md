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
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "mixinMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 33
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
                "start": 37,
                "end": 41
              },
              "start": 35,
              "end": 41
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 42
          }
        ],
        "start": 16,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
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
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 71
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 101
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 103,
                      "end": 106
                    },
                    "start": 101,
                    "end": 106
                  },
                  "value": null,
                  "start": 94,
                  "end": 106
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 111,
                  "end": 114
                },
                "start": 108,
                "end": 114
              },
              "start": 80,
              "end": 114
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 114
          }
        ],
        "start": 60,
        "end": 115
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 137
              },
              "typeArguments": null,
              "start": 127,
              "end": 137
            },
            "start": 125,
            "end": 137
          },
          "start": 116,
          "end": 137
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 150
              },
              "typeArguments": null,
              "start": 140,
              "end": 150
            },
            {
              "type": "TSConstructorType",
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 175
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 177,
                      "end": 180
                    },
                    "start": 175,
                    "end": 180
                  },
                  "value": null,
                  "start": 168,
                  "end": 180
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 190
                  },
                  "typeArguments": null,
                  "start": 185,
                  "end": 190
                },
                "start": 182,
                "end": 190
              },
              "start": 154,
              "end": 190
            }
          ],
          "start": 140,
          "end": 191
        },
        "start": 138,
        "end": 191
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 223
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 241
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 258
                },
                "typeArguments": null,
                "start": 253,
                "end": 258
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mixinMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 280
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
                      "start": 283,
                      "end": 294
                    },
                    "expression": false,
                    "start": 280,
                    "end": 294
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 269,
                  "end": 294
                }
              ],
              "start": 259,
              "end": 300
            },
            "abstract": true,
            "declare": false,
            "start": 198,
            "end": 300
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 322
            },
            "start": 305,
            "end": 323
          }
        ],
        "start": 192,
        "end": 325
      },
      "expression": false,
      "start": 46,
      "end": 325
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 345
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
              "name": "baseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 362
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
                "start": 365,
                "end": 367
              },
              "expression": false,
              "start": 362,
              "end": 367
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 352,
            "end": 367
          }
        ],
        "start": 346,
        "end": 369
      },
      "abstract": false,
      "declare": false,
      "start": 327,
      "end": 369
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 398
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 432
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                  "start": 436,
                  "end": 440
                },
                "start": 434,
                "end": 440
              },
              "body": null,
              "expression": false,
              "start": 432,
              "end": 441
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 405,
            "end": 441
          }
        ],
        "start": 399,
        "end": 443
      },
      "abstract": true,
      "declare": false,
      "start": 371,
      "end": 443
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromConcrete",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 470
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 484
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ConcreteBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 497
          }
        ],
        "optional": false,
        "start": 479,
        "end": 498
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 499,
        "end": 502
      },
      "abstract": false,
      "declare": false,
      "start": 445,
      "end": 502
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
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 521
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedFromConcrete",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 547
            },
            "typeArguments": null,
            "arguments": [],
            "start": 524,
            "end": 549
          },
          "definite": false,
          "start": 510,
          "end": 549
        }
      ],
      "declare": false,
      "start": 504,
      "end": 550
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
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 562
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baseMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 573
          },
          "optional": false,
          "computed": false,
          "start": 551,
          "end": 573
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 551,
        "end": 575
      },
      "directive": null,
      "start": 551,
      "end": 576
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
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 588
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 600
          },
          "optional": false,
          "computed": false,
          "start": 577,
          "end": 600
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 577,
        "end": 602
      },
      "directive": null,
      "start": 577,
      "end": 603
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromAbstract",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 630
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 639,
          "end": 644
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "AbstractBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 645,
            "end": 657
          }
        ],
        "optional": false,
        "start": 639,
        "end": 658
      },
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
              "name": "abstractBaseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 683
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
                "start": 686,
                "end": 688
              },
              "expression": false,
              "start": 683,
              "end": 688
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 665,
            "end": 688
          }
        ],
        "start": 659,
        "end": 690
      },
      "abstract": false,
      "declare": false,
      "start": 605,
      "end": 690
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
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 709
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedFromAbstract",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 735
            },
            "typeArguments": null,
            "arguments": [],
            "start": 712,
            "end": 737
          },
          "definite": false,
          "start": 698,
          "end": 737
        }
      ],
      "declare": false,
      "start": 692,
      "end": 738
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
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 750
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "abstractBaseMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 769
          },
          "optional": false,
          "computed": false,
          "start": 739,
          "end": 769
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 739,
        "end": 771
      },
      "directive": null,
      "start": 739,
      "end": 772
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
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 784
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 796
          },
          "optional": false,
          "computed": false,
          "start": 773,
          "end": 796
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 773,
        "end": 798
      },
      "directive": null,
      "start": 773,
      "end": 799
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 799
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
    "value": "Mixin",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 22,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 61,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 80,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 97,
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
    "value": "any",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 116,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 127,
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
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 140,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 154,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 177,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 198,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 207,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "MixinClass",
    "start": 213,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 224,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 232,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 242,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 269,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 305,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "MixinClass",
    "start": 312,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 327,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "ConcreteBase",
    "start": 333,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "baseMethod",
    "start": 352,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 371,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 380,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "AbstractBase",
    "start": 386,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 405,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "abstractBaseMethod",
    "start": 414,
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
    "type": "Keyword",
    "value": "void",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "DerivedFromConcrete",
    "start": 451,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 471,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 479,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "ConcreteBase",
    "start": 485,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 504,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "wasConcrete",
    "start": 510,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 524,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "DerivedFromConcrete",
    "start": 528,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "wasConcrete",
    "start": 551,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "baseMethod",
    "start": 563,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "wasConcrete",
    "start": 577,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 589,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 605,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "DerivedFromAbstract",
    "start": 611,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 631,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "AbstractBase",
    "start": 645,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "abstractBaseMethod",
    "start": 665,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "wasAbstract",
    "start": 698,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 712,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "DerivedFromAbstract",
    "start": 716,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "wasAbstract",
    "start": 739,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "abstractBaseMethod",
    "start": 751,
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
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "wasAbstract",
    "start": 773,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 785,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  }
]
```
