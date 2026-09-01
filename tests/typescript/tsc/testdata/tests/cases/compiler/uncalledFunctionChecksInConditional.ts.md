__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
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
          "start": 26,
          "end": 33
        },
        "start": 24,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
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
          "start": 61,
          "end": 68
        },
        "start": 59,
        "end": 68
      },
      "body": null,
      "expression": false,
      "start": 35,
      "end": 69
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
            "name": "isUndefinedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 107,
                        "end": 114
                      },
                      "start": 104,
                      "end": 114
                    },
                    "start": 101,
                    "end": 114
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 118,
                    "end": 127
                  }
                ],
                "start": 100,
                "end": 127
              },
              "start": 98,
              "end": 127
            },
            "start": 84,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 127
        }
      ],
      "declare": true,
      "start": 70,
      "end": 128
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 139
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 141,
        "end": 166
      },
      "alternate": null,
      "start": 130,
      "end": 166
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 177
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 186
        },
        "start": 172,
        "end": 186
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 188,
        "end": 220
      },
      "alternate": null,
      "start": 168,
      "end": 220
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 231
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 240
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 235,
          "end": 242
        },
        "start": 226,
        "end": 242
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 244,
        "end": 269
      },
      "alternate": null,
      "start": 222,
      "end": 269
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 289
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 298
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 293,
          "end": 300
        },
        "start": 275,
        "end": 300
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 302,
        "end": 321
      },
      "alternate": null,
      "start": 271,
      "end": 321
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 332
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 341
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 336,
          "end": 343
        },
        "start": 327,
        "end": 343
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 345,
        "end": 364
      },
      "alternate": null,
      "start": 323,
      "end": 364
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 383,
                "end": 390
              },
              "start": 381,
              "end": 390
            },
            "start": 380,
            "end": 390
          },
          "init": null,
          "definite": false,
          "start": 380,
          "end": 390
        }
      ],
      "declare": true,
      "start": 366,
      "end": 391
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
            "name": "ux",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 410,
                    "end": 417
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 420,
                    "end": 429
                  }
                ],
                "start": 410,
                "end": 429
              },
              "start": 408,
              "end": 429
            },
            "start": 406,
            "end": 429
          },
          "init": null,
          "definite": false,
          "start": 406,
          "end": 429
        }
      ],
      "declare": true,
      "start": 392,
      "end": 430
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 448,
                "end": 455
              },
              "start": 446,
              "end": 455
            },
            "start": 445,
            "end": 455
          },
          "init": null,
          "definite": false,
          "start": 445,
          "end": 455
        }
      ],
      "declare": true,
      "start": 431,
      "end": 456
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
            "name": "uy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 475,
                    "end": 482
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 485,
                    "end": 494
                  }
                ],
                "start": 475,
                "end": 494
              },
              "start": 473,
              "end": 494
            },
            "start": 471,
            "end": 494
          },
          "init": null,
          "definite": false,
          "start": 471,
          "end": 494
        }
      ],
      "declare": true,
      "start": 457,
      "end": 495
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 514
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
          "start": 518,
          "end": 525
        },
        "start": 516,
        "end": 525
      },
      "body": null,
      "expression": false,
      "start": 496,
      "end": 526
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
            "name": "uz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 552,
                        "end": 559
                      },
                      "start": 549,
                      "end": 559
                    },
                    "start": 546,
                    "end": 559
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 563,
                    "end": 572
                  }
                ],
                "start": 545,
                "end": 572
              },
              "start": 543,
              "end": 572
            },
            "start": 541,
            "end": 572
          },
          "init": null,
          "definite": false,
          "start": 541,
          "end": 572
        }
      ],
      "declare": true,
      "start": 527,
      "end": 573
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 580
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 584,
          "end": 589
        },
        "start": 579,
        "end": 589
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 591,
        "end": 616
      },
      "alternate": null,
      "start": 575,
      "end": 616
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 622,
          "end": 627
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 632
        },
        "start": 622,
        "end": 632
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 634,
        "end": 659
      },
      "alternate": null,
      "start": 618,
      "end": 659
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 671
            },
            "start": 665,
            "end": 671
          },
          "operator": "||",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 675,
            "end": 678
          },
          "start": 665,
          "end": 678
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 682,
          "end": 687
        },
        "start": 665,
        "end": 687
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 689,
        "end": 714
      },
      "alternate": null,
      "start": 661,
      "end": 714
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 721
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "uy",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 727
            },
            "start": 720,
            "end": 727
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 732
          },
          "start": 720,
          "end": 732
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 736,
          "end": 750
        },
        "start": 720,
        "end": 750
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 752,
        "end": 773
      },
      "alternate": null,
      "start": 716,
      "end": 773
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ux",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 781
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 785,
              "end": 786
            },
            "start": 779,
            "end": 786
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "uz",
            "optional": false,
            "typeAnnotation": null,
            "start": 790,
            "end": 792
          },
          "start": 779,
          "end": 792
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 796,
          "end": 801
        },
        "start": 779,
        "end": 801
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 803,
        "end": 828
      },
      "alternate": null,
      "start": 775,
      "end": 828
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 834,
          "end": 835
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 839,
          "end": 840
        },
        "start": 834,
        "end": 840
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 864,
                "end": 865
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 864,
              "end": 867
            },
            "directive": null,
            "start": 864,
            "end": 868
          }
        ],
        "start": 842,
        "end": 870
      },
      "alternate": null,
      "start": 830,
      "end": 870
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 870
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
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
    "value": "isBar",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 61,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 70,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "isUndefinedFoo",
    "start": 84,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 104,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 118,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 130,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 178,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "isBar",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 232,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "isUndefinedFoo",
    "start": 275,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 290,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 333,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 336,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 366,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 374,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 383,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 392,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 400,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "ux",
    "start": 406,
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
    "value": "boolean",
    "start": 410,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 420,
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
    "value": "declare",
    "start": 431,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 439,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 445,
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
    "value": "boolean",
    "start": 448,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 457,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 465,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "uy",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 475,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 485,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 496,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 504,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 513,
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
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 518,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 527,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 535,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "uz",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 549,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 552,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "undefined",
    "start": 563,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 581,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 584,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
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
    "type": "Identifier",
    "value": "isFoo",
    "start": 622,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 628,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 667,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 672,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 679,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 682,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 722,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "uy",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 728,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 733,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "isUndefinedFoo",
    "start": 736,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "ux",
    "start": 779,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 782,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 787,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "uz",
    "start": 790,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 793,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 796,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 830,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 836,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  }
]
```
