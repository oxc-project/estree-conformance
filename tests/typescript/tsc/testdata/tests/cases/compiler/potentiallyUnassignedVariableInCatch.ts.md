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
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 7
        }
      ],
      "declare": false,
      "start": 0,
      "end": 8
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
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
                    "start": 20,
                    "end": 24
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 31
                  },
                  "optional": false,
                  "computed": false,
                  "start": 20,
                  "end": 31
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 20,
                "end": 33
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 36,
                "end": 39
              },
              "start": 20,
              "end": 39
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 48
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1234,
                      "raw": "1234",
                      "start": 51,
                      "end": 55
                    },
                    "start": 45,
                    "end": 55
                  },
                  "directive": null,
                  "start": 45,
                  "end": 56
                }
              ],
              "start": 41,
              "end": 59
            },
            "alternate": null,
            "start": 16,
            "end": 59
          }
        ],
        "start": 13,
        "end": 61
      },
      "handler": {
        "type": "CatchClause",
        "param": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 74
              },
              "directive": null,
              "start": 71,
              "end": 75
            }
          ],
          "start": 68,
          "end": 77
        },
        "start": 62,
        "end": 77
      },
      "finalizer": null,
      "start": 9,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
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
    "value": ";",
    "start": 7,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 62,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  }
]
```
