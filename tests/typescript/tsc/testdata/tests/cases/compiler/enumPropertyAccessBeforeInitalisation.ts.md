__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "computed": false,
            "start": 13,
            "end": 18
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 29
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "optional": false,
              "computed": false,
              "start": 28,
              "end": 31
            },
            "computed": false,
            "start": 24,
            "end": 31
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "property": {
                "type": "Literal",
                "value": "C",
                "raw": "\"C\"",
                "start": 43,
                "end": 46
              },
              "optional": false,
              "computed": true,
              "start": 41,
              "end": 47
            },
            "computed": false,
            "start": 37,
            "end": 47
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 57,
                "end": 58
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              },
              "start": 57,
              "end": 62
            },
            "computed": false,
            "start": 53,
            "end": 62
          }
        ],
        "start": 7,
        "end": 64
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  }
]
```
