__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 15
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
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 20,
                "end": 21
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 23,
                "end": 24
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 20,
              "end": 24
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 29,
                "end": 30
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 26,
              "end": 30
            }
          ],
          "start": 18,
          "end": 32
        },
        "start": 0,
        "end": 32
      },
      "directive": null,
      "start": 0,
      "end": 32
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
            "start": 33,
            "end": 39
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 47
          },
          "optional": false,
          "computed": false,
          "start": 33,
          "end": 47
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 57
          },
          "property": {
            "type": "Literal",
            "value": "default",
            "raw": "'default'",
            "start": 58,
            "end": 67
          },
          "optional": false,
          "computed": true,
          "start": 50,
          "end": 68
        },
        "start": 33,
        "end": 68
      },
      "directive": null,
      "start": 33,
      "end": 69
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "exports",
    "start": 0,
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
    "value": "default",
    "start": 8,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "'default'",
    "start": 58,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  }
]
```
