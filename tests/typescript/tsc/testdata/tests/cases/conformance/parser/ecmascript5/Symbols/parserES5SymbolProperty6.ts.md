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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 33
              },
              "optional": false,
              "computed": false,
              "start": 15,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 45,
              "end": 47
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 48
          }
        ],
        "start": 8,
        "end": 50
      },
      "abstract": false,
      "declare": false,
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
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 22,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  }
]
```
