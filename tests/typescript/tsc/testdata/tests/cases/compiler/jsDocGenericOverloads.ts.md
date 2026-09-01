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
            "name": "createElementC",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 231
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 529
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
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
                        "name": "document",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 590
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 604
                      },
                      "optional": false,
                      "computed": false,
                      "start": 582,
                      "end": 604
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 606
                      }
                    ],
                    "optional": false,
                    "start": 582,
                    "end": 607
                  },
                  "start": 575,
                  "end": 607
                }
              ],
              "start": 537,
              "end": 610
            },
            "id": null,
            "generator": false,
            "start": 527,
            "end": 610
          },
          "definite": false,
          "start": 217,
          "end": 610
        }
      ],
      "declare": false,
      "start": 211,
      "end": 610
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createElementF",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 916
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 917,
          "end": 918
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 920,
          "end": 921
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
                  "name": "document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 967,
                  "end": 975
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 989
                },
                "optional": false,
                "computed": false,
                "start": 967,
                "end": 989
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 991
                }
              ],
              "optional": false,
              "start": 967,
              "end": 992
            },
            "start": 960,
            "end": 992
          }
        ],
        "start": 923,
        "end": 994
      },
      "expression": false,
      "start": 893,
      "end": 994
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 994
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "createElementC",
    "start": 217,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 575,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 582,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 591,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 893,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "createElementF",
    "start": 902,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 960,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 967,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 976,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 993,
    "end": 994
  }
]
```
