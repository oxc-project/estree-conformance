__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1,
            "end": 2
          },
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 3,
                "end": 7
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 8,
                "end": 9
              },
              "optional": false,
              "computed": false,
              "start": 3,
              "end": 9
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "optional": false,
            "computed": true,
            "start": 3,
            "end": 12
          },
          "start": 1,
          "end": 12
        },
        "consequent": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "JW",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 18
            },
            "optional": false,
            "computed": false,
            "start": 14,
            "end": 18
          },
          "operator": "||",
          "right": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 21,
                    "end": 22
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 23,
                    "end": 25
                  },
                  "optional": false,
                  "computed": false,
                  "start": 21,
                  "end": 25
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 26,
                    "end": 30
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 32
                  }
                ],
                "optional": false,
                "start": 21,
                "end": 33
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 35
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 38
                  },
                  "optional": false,
                  "computed": false,
                  "start": 34,
                  "end": 38
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 40
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 42
                  },
                  "optional": false,
                  "computed": false,
                  "start": 39,
                  "end": 42
                },
                "start": 34,
                "end": 42
              }
            ],
            "start": 21,
            "end": 42
          },
          "start": 14,
          "end": 43
        },
        "alternate": {
          "type": "MemberExpression",
          "object": {
            "type": "ThisExpression",
            "start": 44,
            "end": 48
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 50
        },
        "start": 0,
        "end": 50
      },
      "directive": null,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2,
    "end": 3
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "JW",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 18,
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
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 23,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "JW",
    "start": 36,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 49,
    "end": 50
  }
]
```
