__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 234
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 261,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 237,
            "end": 266
          },
          "definite": false,
          "start": 223,
          "end": 266
        }
      ],
      "declare": false,
      "start": 217,
      "end": 267
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
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 280
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 293
          },
          "optional": false,
          "computed": false,
          "start": 269,
          "end": 293
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
                "name": "color",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 307
              },
              "value": {
                "type": "Literal",
                "value": "red",
                "raw": "\"red\"",
                "start": 309,
                "end": 314
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 302,
              "end": 314
            }
          ],
          "start": 296,
          "end": 316
        },
        "start": 269,
        "end": 316
      },
      "directive": null,
      "start": 269,
      "end": 317
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
            "name": "MyComponent2",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 337
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 346,
              "end": 350
            },
            "id": null,
            "generator": false,
            "start": 340,
            "end": 350
          },
          "definite": false,
          "start": 325,
          "end": 350
        }
      ],
      "declare": false,
      "start": 319,
      "end": 351
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
            "name": "MyComponent2",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 414
          },
          "optional": false,
          "computed": false,
          "start": 389,
          "end": 414
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
                "name": "color",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 428
              },
              "value": {
                "type": "Literal",
                "value": "red",
                "raw": "\"red\"",
                "start": 430,
                "end": 435
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 423,
              "end": 435
            }
          ],
          "start": 417,
          "end": 437
        },
        "start": 389,
        "end": 437
      },
      "directive": null,
      "start": 389,
      "end": 437
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
            "name": "check",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 507
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent2",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 522
          },
          "definite": false,
          "start": 502,
          "end": 522
        }
      ],
      "declare": false,
      "start": 496,
      "end": 523
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "expectLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 602
      },
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
          "start": 603,
          "end": 604
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 606,
        "end": 608
      },
      "expression": false,
      "start": 580,
      "end": 608
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 622
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 679,
                  "end": 683
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 689
                },
                "optional": false,
                "computed": false,
                "start": 679,
                "end": 689
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
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 694,
                      "end": 699
                    },
                    "value": {
                      "type": "Literal",
                      "value": "red",
                      "raw": "\"red\"",
                      "start": 701,
                      "end": 706
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 694,
                    "end": 706
                  }
                ],
                "start": 692,
                "end": 708
              },
              "start": 679,
              "end": 708
            },
            "directive": null,
            "start": 679,
            "end": 709
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "expectLiteral",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 728
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 729,
                  "end": 733
                }
              ],
              "optional": false,
              "start": 715,
              "end": 734
            },
            "directive": null,
            "start": 715,
            "end": 735
          }
        ],
        "start": 625,
        "end": 737
      },
      "expression": false,
      "start": 610,
      "end": 737
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 781
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 789
          },
          "optional": false,
          "computed": false,
          "start": 775,
          "end": 789
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
                "name": "color",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 803
              },
              "value": {
                "type": "Literal",
                "value": "red",
                "raw": "\"red\"",
                "start": 805,
                "end": 810
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 798,
              "end": 810
            }
          ],
          "start": 792,
          "end": 812
        },
        "start": 775,
        "end": 812
      },
      "directive": null,
      "start": 775,
      "end": 812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "expectLiteral",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 827
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 835
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "module",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 843
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "exports",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 844,
                    "end": 851
                  },
                  "optional": false,
                  "computed": false,
                  "start": 837,
                  "end": 851
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 830,
                "end": 851
              }
            ],
            "start": 828,
            "end": 853
          }
        ],
        "optional": false,
        "start": 814,
        "end": 854
      },
      "directive": null,
      "start": 814,
      "end": 855
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 217,
  "end": 855
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 223,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Null",
    "value": "null",
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
    "type": "Identifier",
    "value": "MyComponent",
    "start": 269,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 281,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 302,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"red\"",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "MyComponent2",
    "start": 325,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
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
    "type": "Null",
    "value": "null",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "MyComponent2",
    "start": 389,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 402,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "String",
    "value": "\"red\"",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 496,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "check",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "MyComponent2",
    "start": 510,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 580,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "expectLiteral",
    "start": 589,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 610,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
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
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "String",
    "value": "\"red\"",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "expectLiteral",
    "start": 715,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 775,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 782,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 798,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "String",
    "value": "\"red\"",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "expectLiteral",
    "start": 814,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  }
]
```
