__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 18,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
      },
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 39
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 45
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "start": 104,
                  "end": 115
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 118,
                  "end": 119
                },
                "definite": false,
                "start": 104,
                "end": 119
              }
            ],
            "declare": false,
            "start": 100,
            "end": 120
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 135
            },
            "start": 125,
            "end": 136
          }
        ],
        "start": 47,
        "end": 151
      },
      "expression": false,
      "start": 23,
      "end": 151
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 164
      },
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 169
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 176
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 182
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 182
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 190
            },
            "id": null,
            "generator": false,
            "start": 172,
            "end": 190
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 190
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
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
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    },
                    "start": 252,
                    "end": 260
                  },
                  "start": 249,
                  "end": 260
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 263,
                  "end": 264
                },
                "definite": false,
                "start": 249,
                "end": 264
              }
            ],
            "declare": false,
            "start": 245,
            "end": 265
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 280
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 277,
              "end": 282
            },
            "start": 270,
            "end": 283
          }
        ],
        "start": 192,
        "end": 298
      },
      "expression": false,
      "start": 153,
      "end": 298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 311
      },
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 316
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 322
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 322
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 327
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 330,
            "end": 331
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 331
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 393
            },
            "start": 383,
            "end": 394
          }
        ],
        "start": 333,
        "end": 396
      },
      "expression": false,
      "start": 300,
      "end": 396
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 409
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 414
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 419
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 425
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 416,
          "end": 425
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 443
            },
            "start": 433,
            "end": 443
          }
        ],
        "start": 427,
        "end": 445
      },
      "expression": false,
      "start": 398,
      "end": 445
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 458
      },
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 461
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 465
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 465
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "start": 473,
            "end": 481
          }
        ],
        "start": 467,
        "end": 483
      },
      "expression": false,
      "start": 447,
      "end": 483
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 496
      },
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
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 503
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 511
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 511
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 531
            },
            "start": 519,
            "end": 531
          }
        ],
        "start": 513,
        "end": 533
      },
      "expression": false,
      "start": 485,
      "end": 533
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 546
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
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
                "start": 549,
                "end": 552
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 558
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 548,
              "end": 558
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 561,
                "end": 564
              },
              "start": 561,
              "end": 566
            },
            "start": 559,
            "end": 566
          },
          "start": 547,
          "end": 566
        }
      ],
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
                      "type": "TSNumberKeyword",
                      "start": 583,
                      "end": 589
                    },
                    "start": 581,
                    "end": 589
                  },
                  "start": 578,
                  "end": 589
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 592,
                  "end": 593
                },
                "definite": false,
                "start": 578,
                "end": 593
              }
            ],
            "declare": false,
            "start": 574,
            "end": 594
          }
        ],
        "start": 568,
        "end": 596
      },
      "expression": false,
      "start": 535,
      "end": 596
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 607
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 625
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 633,
                      "end": 634
                    },
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 637,
                      "end": 639
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 639
                  },
                  "readonly": false,
                  "static": false,
                  "start": 626,
                  "end": 639
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 649
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 652,
                      "end": 653
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 648,
                    "end": 653
                  },
                  "readonly": false,
                  "static": false,
                  "start": 641,
                  "end": 653
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 655,
                "end": 657
              },
              "expression": false,
              "start": 625,
              "end": 657
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 614,
            "end": 657
          }
        ],
        "start": 608,
        "end": 659
      },
      "abstract": false,
      "declare": false,
      "start": 598,
      "end": 659
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 670,
        "end": 672
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 679,
              "end": 685
            },
            "start": 677,
            "end": 685
          },
          "start": 673,
          "end": 685
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 690
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 697
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 687,
          "end": 697
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 699,
        "end": 702
      },
      "expression": false,
      "start": 661,
      "end": 702
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 702
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 104,
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
    "value": "number",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 153,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 184,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 187,
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
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 270,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 277,
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
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 300,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 383,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 398,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 433,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 447,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "a",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 473,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 519,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 535,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 544,
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
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 555,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
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
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 578,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 583,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 598,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 614,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 626,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 641,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 661,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 670,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 673,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 693,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  }
]
```
