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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 13
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 18
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 20,
                  "end": 21
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 21
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "value": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 26,
                  "end": 29
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 23,
                "end": 29
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 34,
                  "end": 38
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 31,
                "end": 38
              }
            ],
            "start": 16,
            "end": 39
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 39
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "init": null,
                "definite": false,
                "start": 51,
                "end": 52
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "init": null,
                "definite": false,
                "start": 54,
                "end": 55
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                "init": null,
                "definite": false,
                "start": 57,
                "end": 58
              }
            ],
            "declare": false,
            "start": 47,
            "end": 59
          }
        ],
        "start": 41,
        "end": 61
      },
      "expression": false,
      "start": 0,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 61
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
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "a",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "\"2\"",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
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
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  }
]
```
