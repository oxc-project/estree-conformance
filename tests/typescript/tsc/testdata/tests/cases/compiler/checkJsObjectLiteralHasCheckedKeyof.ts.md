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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 22
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 34,
                  "end": 35
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 31,
                "end": 35
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 44,
                  "end": 45
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 41,
                "end": 45
              }
            ],
            "start": 25,
            "end": 47
          },
          "definite": false,
          "start": 19,
          "end": 47
        }
      ],
      "declare": false,
      "start": 13,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "selected",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 98
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 101,
            "end": 104
          },
          "definite": false,
          "start": 90,
          "end": 104
        }
      ],
      "declare": false,
      "start": 86,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "selected",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 114
        },
        "right": {
          "type": "Literal",
          "value": "z",
          "raw": "\"z\"",
          "start": 117,
          "end": 120
        },
        "start": 106,
        "end": 120
      },
      "directive": null,
      "start": 106,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 136
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 13,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 86,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "selected",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  }
]
```
