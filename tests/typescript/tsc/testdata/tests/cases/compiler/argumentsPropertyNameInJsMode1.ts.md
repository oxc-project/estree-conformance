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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
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
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 19
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 22,
                      "end": 28
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 33,
                    "end": 36
                  },
                  "id": null,
                  "generator": false,
                  "start": 21,
                  "end": 36
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 36
              }
            ],
            "start": 12,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 62
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 65
                },
                "optional": false,
                "computed": false,
                "start": 59,
                "end": 65
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 69
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 69
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 68,
                      "end": 69
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 71,
                        "end": 80
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 82,
                        "end": 84
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 71,
                      "end": 84
                    }
                  ],
                  "start": 66,
                  "end": 86
                }
              ],
              "optional": false,
              "start": 59,
              "end": 87
            },
            "directive": null,
            "start": 59,
            "end": 88
          }
        ],
        "start": 55,
        "end": 90
      },
      "expression": false,
      "start": 40,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 94
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 95,
            "end": 96
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 98,
            "end": 99
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 101,
            "end": 102
          }
        ],
        "optional": false,
        "start": 92,
        "end": 103
      },
      "directive": null,
      "start": 92,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 40,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 71,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": ";",
    "start": 103,
    "end": 104
  }
]
```
