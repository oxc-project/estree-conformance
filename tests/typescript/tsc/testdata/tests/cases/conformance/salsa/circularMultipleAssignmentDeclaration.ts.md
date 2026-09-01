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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 2
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "next",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 7
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 7
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 12
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "optional": false,
            "computed": false,
            "start": 10,
            "end": 17
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shared",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 29
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 31,
                  "end": 33
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 23,
                "end": 33
              }
            ],
            "start": 21,
            "end": 35
          },
          "start": 10,
          "end": 35
        },
        "start": 0,
        "end": 35
      },
      "directive": null,
      "start": 0,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 39
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 44
              },
              "optional": false,
              "computed": false,
              "start": 37,
              "end": 44
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 51
            },
            "optional": false,
            "computed": false,
            "start": 37,
            "end": 51
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mymethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 37,
          "end": 60
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 63,
          "end": 65
        },
        "start": 37,
        "end": 65
      },
      "directive": null,
      "start": 37,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "ns",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "ns",
    "start": 37,
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
    "value": "next",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "shared",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "mymethod",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  }
]
```
