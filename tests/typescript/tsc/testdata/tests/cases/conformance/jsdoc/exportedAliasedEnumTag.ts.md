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
            "name": "middlewarify",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 16
          },
          "init": {
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
                "start": 19,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 33
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 33
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 36,
              "end": 38
            },
            "start": 19,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
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
            "name": "middlewarify",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 54,
          "end": 71
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
                "name": "BEFORE",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 84
              },
              "value": {
                "type": "Literal",
                "value": "before",
                "raw": "'before'",
                "start": 86,
                "end": 94
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 78,
              "end": 94
            }
          ],
          "start": 74,
          "end": 96
        },
        "start": 54,
        "end": 96
      },
      "directive": null,
      "start": 54,
      "end": 97
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
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
    "value": "middlewarify",
    "start": 4,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "middlewarify",
    "start": 54,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "BEFORE",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "'before'",
    "start": 86,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  }
]
```
