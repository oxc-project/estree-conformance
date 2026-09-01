__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 34
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 48
                },
                "optional": false,
                "computed": false,
                "start": 29,
                "end": 48
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Child",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 56,
                  "end": 60
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 75
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 89
                    },
                    "optional": false,
                    "computed": false,
                    "start": 70,
                    "end": 89
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 95
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 97,
                      "end": 101
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 115,
                          "end": 120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 121,
                          "end": 134
                        },
                        "optional": false,
                        "computed": false,
                        "start": 115,
                        "end": 134
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Child",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 140
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 142,
                          "end": 146
                        }
                      ],
                      "optional": false,
                      "start": 115,
                      "end": 147
                    }
                  ],
                  "optional": false,
                  "start": 70,
                  "end": 148
                }
              ],
              "optional": false,
              "start": 29,
              "end": 149
            },
            "start": 22,
            "end": 150
          }
        ],
        "start": 16,
        "end": 152
      },
      "expression": false,
      "start": 0,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 152
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 35,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Null",
    "value": "null",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 76,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Null",
    "value": "null",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 121,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Child",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Null",
    "value": "null",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
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
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  }
]
```
