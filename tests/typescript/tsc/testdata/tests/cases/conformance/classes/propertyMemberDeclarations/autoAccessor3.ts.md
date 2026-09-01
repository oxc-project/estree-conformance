__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "w",
              "raw": "\"w\"",
              "start": 24,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 29,
                "end": 32
              },
              "start": 27,
              "end": 32
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 15,
            "end": 33
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "x",
              "raw": "\"x\"",
              "start": 47,
              "end": 50
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 53,
              "end": 54
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 38,
            "end": 55
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "y",
              "raw": "\"y\"",
              "start": 76,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 81,
                "end": 84
              },
              "start": 79,
              "end": 84
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 60,
            "end": 85
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "z",
              "raw": "\"z\"",
              "start": 106,
              "end": 109
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 112,
              "end": 113
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 90,
            "end": 114
          }
        ],
        "start": 9,
        "end": 116
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 116
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 15,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"w\"",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 38,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 67,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 90,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 97,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  }
]
```
