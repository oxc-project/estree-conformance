__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [],
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 10
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 14,
                      "end": 15
                    }
                  ],
                  "start": 13,
                  "end": 16
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 20
                },
                "optional": false,
                "computed": false,
                "start": 13,
                "end": 20
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 21,
                      "end": 22
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "id": null,
                  "generator": false,
                  "start": 21,
                  "end": 27
                }
              ],
              "optional": false,
              "start": 13,
              "end": 28
            },
            "start": 8,
            "end": 28
          },
          "definite": false,
          "start": 4,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 39,
                    "end": 40
                  }
                ],
                "start": 38,
                "end": 41
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 45
              },
              "optional": false,
              "computed": false,
              "start": 38,
              "end": 45
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "id": null,
                "generator": false,
                "start": 46,
                "end": 52
              }
            ],
            "optional": false,
            "start": 38,
            "end": 53
          },
          "definite": false,
          "start": 34,
          "end": 53
        }
      ],
      "declare": false,
      "start": 30,
      "end": 54
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 23,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 48,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  }
]
```
