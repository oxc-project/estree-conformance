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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 90
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 96
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 98,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 95,
                "end": 99
              }
            ],
            "start": 93,
            "end": 101
          },
          "definite": false,
          "start": 88,
          "end": 101
        }
      ],
      "declare": false,
      "start": 82,
      "end": 102
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 111
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 141,
                  "end": 142
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 138,
                "end": 142
              }
            ],
            "start": 136,
            "end": 144
          },
          "definite": false,
          "start": 109,
          "end": 145
        }
      ],
      "declare": false,
      "start": 103,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 88,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  }
]
```
