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
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 16,
          "end": 18
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bogus",
          "optional": false,
          "typeAnnotation": null,
          "start": 19,
          "end": 24
        },
        "optional": false,
        "computed": false,
        "start": 16,
        "end": 24
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 25,
        "end": 27
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 27
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
    "type": "Keyword",
    "value": "extends",
    "start": 8,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "bogus",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  }
]
```
