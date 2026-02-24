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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 27
          },
          "init": {
            "type": "Literal",
            "value": "I wish the generated JS to be executed in node",
            "raw": "'I wish the generated JS to be executed in node'",
            "start": 30,
            "end": 78
          },
          "definite": false,
          "start": 24,
          "end": 78
        }
      ],
      "declare": false,
      "start": 20,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": {
    "type": "Hashbang",
    "value": "/usr/bin/env node",
    "start": 0,
    "end": 19
  },
  "start": 20,
  "end": 79
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 20,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "'I wish the generated JS to be executed in node'",
    "start": 30,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  }
]
```
